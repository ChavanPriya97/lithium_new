const orderModel = require("../models/orderModel")

const userController = require("../controllers/userMidController")

const productController = require("../controllers/productController")

const createOrder = async function(req ,res){
    let order = req.body
    let header = req.header
    const isFreeAppUser = header["isFreeAppUser"]

    let orderCreated = await orderModel.create(order)
    res.send({data : orderCreated })

}

const getOrderData = async function (req, res) {
    let orders = await orderModel.find()
    res.send({data: orders})
}

const getOrderWithProductAndUserDetails = async function(req,res){
    let specificOrder = await orderModel.find().populate('userId').populate('productId')
    res.send({data : specificOrder})
}
      

module.exports.createOrder = createOrder
module.exports.getOrderData = getOrderData
module.exports.getOrderWithProductAndUserDetails = getOrderWithProductAndUserDetails