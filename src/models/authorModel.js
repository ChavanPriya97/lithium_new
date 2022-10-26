const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    author_id : {
        type :Number,
        require : true},

    author_Name :{
        type :String,
        require :true},
    age : Number ,
    address : String,


}, { timestamps: true })


module.exports = mongoose.model('Author', authorSchema)
