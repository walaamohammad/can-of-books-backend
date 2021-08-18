'use strict';
const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
   username:{type:string},
    description:{type:string},
    book:{type:string},
});
const bookModel=mongoose.model('books',bookSchema)
module.exports=bookModel;