const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId :{
        type : ObjectId,
        ref : "UserMid",
        required : true
    },
    productId : {
        type : ObjectId,
        ref : "Product",
        required : true
    },
    amount : Number,
    isFreeAppUser:{
        type :Boolean,
        default : false
    } ,
    date :{
        type : Date
    }

})


module.exports = mongoose.model('Order',orderSchema)