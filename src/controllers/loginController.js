const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const loginUser = async function (req, res) {
  try{
    let data = req.body
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) return res.status(401).send({ status: false,
              msg: "username or the password is not corerct",});

    console.log(data)
        if(Object.keys(data).length != 0){
          let token = jwt.sign(
            {
              userId: user._id.toString(),
              email : user.emailId,
              batch: "lithium",
              organisation: "Functionup-19th-Sep-2022"
            },
            "Lithium-Authentication-Token"
            );
        res.setHeader("x-auth-token", token);
        res.status(200).send({ status: true, data: token });

        }
        else{
            res.status(400).send({msg : "Bad Request"})
        }
  }
  catch(error){
    console.log("This is the error:",error.message)
    res.status(500).send({msg : "Error Message", error : error.message})
  }  

  };
  
module.exports.loginUser = loginUser


   // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret
    // The same secret will be used to decode tokens