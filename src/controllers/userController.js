const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};


const getUserData = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  // let decodedToken = jwt.verify(token, "Lithium-Authentication-Token");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: true, data: updatedUser });
};

const postMessage = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    // let token = req.headers["x-auth-token"]
    // if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    // let decodedToken = jwt.verify(token, 'functionup-thorium')

    // if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    // //userId for which the request is made. In this case message to be posted.
    // let userToBeModified = req.params.userId
    // //userId for the logged-in user
    // let userLoggedIn = decodedToken.userId

    // //userId comparision to check if the logged-in user is requesting for their own data
    // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}


const deleteUser = async function(req,res){
  const userId = req.params.userId

  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  const updateUser = await userModel.findOneAndUpdate({_id : userId},{isDeleted:true},{new :true})

  res.send({status : true , data : updateUser})

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser