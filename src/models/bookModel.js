const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type : String, 
        require : true ,
        unique : true
    },
    authorName: String, 
    tags: [String],
    isPublished: Boolean,
    year :{
        type:Number
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {
        type: Number, 
        default: 10
    },
    pages : {
        type : Number
    },
    stock :{
        type : Boolean,
        default : true
    }

},
{ timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

