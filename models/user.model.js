'use strict';
const mongoose=require('mongoose');
const  bookSchema=require('./books.model');
const userSchema=new mongoose.Schema({
    email:{type:string},
    books:[bookSchema],
});

const userModel=mongoose.model('userSchema',userSchema);
const seedUser=()=>{
const DaVinciCode={
    name:'Da Vinci Code',
    description:'author by Dan Brown',
    status:'novel'
}

const TheLostSymbole={
    name:'The Lost Symbol',
    description:'author by Dan Brown',
    status:'novel'
}

const ForrestGump={
    name:'Forrest Gump',
    description:'author by Winston Groom',
    status:'novel'
}
}
const seedUser=()=>{
    const w=new userModel({
email:'walaaosamaajaj2013@gmail.com',
books:[DaVinciCode , TheLostSymbole ,ForrestGump]
    });
    w.save();
    return(w);
}
module.exports=userModel;