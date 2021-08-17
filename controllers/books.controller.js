'use strict';

const userModel = require("../models/user.model");

const booksController=(req,res)=>{
    const searchQuery=req.searchQuery.email;
    userModel.findOne({email:searchQuery},(err ,user)=>{
        if(err){
            res.send(err.msg)

        }
        else{
            res.json(user.books)
        }
    })

}

module.exports=booksController;