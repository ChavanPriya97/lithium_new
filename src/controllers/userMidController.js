const userMidModel = require("../models/userMidModel")

const createUser1 = async function(req,res){
    let user = req.body
    const userCreated = await userMidModel.create(user)
    res.send({data : userCreated })

}

const getUserData = async function(req,res){

    let users = await userMidModel.find()
    res.send({data : users})

}

module.exports.createUser1 = createUser1
module.exports.getUserData = getUserData