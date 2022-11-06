const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
  
   
    let token = jwt.sign(
        {
        userId: user._id.toString(),
        email : user.emailId,
        batch: "lithium",
        organisation: "Functionup-19th-Sep-2022",
        },
        "Lithium-Authentication-Token"
        );

    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
  };
  
module.exports.loginUser = loginUser


   // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret
    // The same secret will be used to decode tokens