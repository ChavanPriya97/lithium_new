const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  // console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const getUserData = async function (req, res) {
  // let token = req.headers["x-auth-token"];
  // console.log(token)
//   if (!token) token = req.headers["x-auth-token"];
//   console.log(token)
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//    console.log(token);

// let decodedToken = jwt.verify(token, "Lithium-Authentication-Token");
//   if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: updatedUser, data: updatedUser });
};


const deleteUser = async function(req,res){
  let userId = req.params.userId;
  let user = await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
  res.send({data : user})
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser