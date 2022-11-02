const userMidModel = require("../models/userMidModel")

const createUser = async function(req,res){
    let user = req.body

    let userCreated = await userMidModel.create(user)
    res.send({data : userCreated })

}

const getUserData = async function(req,res){

    let users = await userMidModel.find()
    res.send({data : users})

}

module.exports.createUser = createUser
module.exports.getUserData = getUserData