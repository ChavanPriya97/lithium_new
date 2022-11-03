const { isValidObjectId } = require("mongoose")

const newmiddleware = function(req, res, next){
    // Setting an attribute 'isFreeAppUser' in request
    // The header value comparison is done once and
    // the result can be used directly wherever required.
    let header =req.headers.isfreeappuser
    const newHeader = header=="true" ? true :false
    const isFreeAppUser = req.isFreeAppUser=newHeader
        
    if(header)
    {
        console.log("your header is added successfully")
        next()
    }
    else
    {
        console.log("set your header isfreeappuser is required")
        res.send({headermsg:"request is missing a mandatory header"})
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

    // if((!isValidObjectId(userId)) && (!isValidObjectId(productId))){
    //     return res.send({data : "userId and productId is not valid"})
    // }

    next()
}

module.exports.newmiddleware = newmiddleware
module.exports.middlewareForId = middlewareForId