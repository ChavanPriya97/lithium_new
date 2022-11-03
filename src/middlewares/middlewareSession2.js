const { isValidObjectId } = require("mongoose")

const newmiddleware = function(req, res, next){
    // Setting an attribute 'isFreeAppUser' in request
    // The header value comparison is done once and
    // the result can be used directly wherever required.
    const body = req.body
    const headers = req.headers
    const freeUser = headers.isfreeappuser

    if(freeUser) {
        console.log("Free App User header is added Successfully")  
        next()
    }
    else{
        console.log("Free App User header is not added")  
        return res.send({data : "Free App User header is Required"})
    }
}

const middlewareForId = function(req,res,next){
    let userId = req.body.userId
    let productId = req.body.productId


    if(!isValidObjectId(userId)){
        return res.send({data : "userId is not valid"})
    }

    if(!isValidObjectId(productId)){
        return res.send({data : "productId is not valid"})
    }

    if((!isValidObjectId(userId)) && (!isValidObjectId(productId))){
        return res.send({data : "userId and productId is not valid"})
    }

    next()
}

module.exports.newmiddleware = newmiddleware
module.exports.middlewareForId = middlewareForId