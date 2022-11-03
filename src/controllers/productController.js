const productModel = require("../models/productModel")

const createProduct = async function(req,res){
    const product = req.body

    const productCreated = await productModel.create(product)

    res.send({data : productCreated})
}

const getProductData = async function(req, res){
    const productDetail = await productModel.find()

    res.send({data : productDetail })
}

module.exports.createProduct =createProduct
module.exports.getProductData = getProductData