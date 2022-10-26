const mongoose = require('mongoose');

const BookNewSchema = new mongoose.Schema({
    name : {
        type:String,
        require : true},
    author_id : {
        type :Number,
        require : true},
    price :Number,
    rating : Number
},{ timestamps: true })

module.exports = mongoose.model('BookNew',BookNewSchema) 