const productModel = require("../models/productModel")

const createProduct = async function(req,res){
    let product = req.body

    let productCreated = await productModel.create(product)

    res.send({data : productCreated})
}

const getProductData = async function(req, res){
    let productDetail = await productModel.find()

    res.send({data : productDetail })
}

module.exports.createProduct =createProduct
module.exports.getProductData = getProductData