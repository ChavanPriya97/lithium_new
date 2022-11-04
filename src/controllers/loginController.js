const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const loginUser = async function (req, res) {
    let emailId = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: emailId, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
    let token = jwt.sign(
      {
        //payload
        userId: user._id.toString(),//return content of  a string
        batch: "Lithium",
        organisation: "FunctionUp",
      },
      //secretekey or signature
      "Lithium-Authentication-Token"
    );
    res.setHeader("x-auth-token", token);//res.setHeder(key,value)
    res.send({ status: true, token: token });
  };

module.exports.loginUser = loginUser;
