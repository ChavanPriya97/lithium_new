const moment = require("moment/moment")

const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const middle5 = function(req,res,next){
    const date = moment().format('MMMM Do YYYY , hh:mm:ss  a')
    const ipAddress = req.socket.remoteAddress;
    const route = req.path
    console.log({dateTime:date ,ipAdd : ipAddress ,route : route})

    next()
}
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4

module.exports.middle5 = middle5
