'use strict';
const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
    name:{type:string},
    description:{type:string},
    status:{type:string},
});
const bookModel=mongoose.model('books',bookSchema)
module.exports=bookModel;