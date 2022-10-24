const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        unique: true,
        required: true
    
    },
    authorName : {
        type : String,
        required: true
    },
    category : {
        type : String,
        required: true
    },
    publishingYear : {
        type : Number,
        required: true
    }
},{ timestamps: true });




module.exports = mongoose.model('Books', bookSchema) //BookDetails



// String, Number
// Boolean, Object/json, array