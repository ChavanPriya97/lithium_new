const mongoose = require('mongoose');

const userMidSchema = new mongoose.Schema( {
    name: {
        type: String,
        unique: true,
        required: true
    },
    balance:{
        type:Number ,
        default : 100 
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    isFreeAppUser :{
        type : Boolean,
        default : false,
    }
}, { timestamps: true });

module.exports = mongoose.model('UserMid', userMidSchema) //users



// String, Number
// Boolean, Object/json, array