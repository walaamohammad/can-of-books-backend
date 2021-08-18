'use strict';

const userModel = require('../models/user.model');

const booksController=(req,res)=>{
    const searchQuery=req.query.email
    userModel.findOne({email:searchQuery},(error,user)=>{
        if(error){
            res.send(error.message)

        }
       
            res.send(user.books);
        
    });
}

const createUserController= (req,res)=>{
    let data={
        username:req.body["username"],
        department:req.body["department"],
        age:req.body["age"]
    }
    let newUser= new userModel(data);
    newUser.save().then(    
        res.json({message:"user created succefully",user:newUser})
    )
}

const deleteUserController=(req,res)=>{
    let userId=req.params["id"];
    userModel.findByIdAndDelete({_id:userId},(err,data)=>{
        if (err){
            res.send("error occured");
        }
        console.log(userId);
        res.send("user deleted");
    })
}
module.exports={
    booksController,
    createUserController,
    deleteUserController
}

module.exports=booksController;