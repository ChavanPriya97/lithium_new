const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
    try{
        let data = req.body;
        console.log(data)
        if(Object.keys(data).length != 0){
            let savedData = await userModel.create(data);
            //console.log(req.newAtribute);
            res.status(201).send({ msg: savedData });

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


const getUserData = async function (req, res) {
    try{
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
            return res.status(401).send({ status: false, msg: "No such user exists" });
        
        res.status(200).send({ status: true, data: userDetails });

    }
    catch(error){
        console.log("This is the error:",error.message)
        res.status(500).send({msg : "Error Message", error : error.message})
    }
  
};

const updateUser = async function (req, res) {
    try{

        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        //Return an error if no user with the given id exists in the db
        if (!user) {
          return res.status(401).send("No such user exists");
        }
      
        let userData = req.body;
        console.log(userData)
        if(Object.keys(userData).length != 0){
            let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
            res.status(200).send({ status: true, data: updatedUser });

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

const postMessage = async function (req, res) {
    try{
        let data = re.body
        let message = req.body.message
        console.log(data)

        let user = await userModel.findById(req.params.userId)
        if(!user) return res.status(401).send({status: false, msg: 'No such user exists'})

        if(Object.keys(data).length != 0){
            let updatedPosts = user.posts
            //add the message to user's posts
            updatedPosts.push(message)
            let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
            //return the updated user document
            return res.status(200).send({status: true, data: updatedUser})

        }
        else{
            return res.status(400).send({msg : "Bad Request"})
        }
    }
    catch(error){
        console.log({msg : "Error Message" , error : error.message})
        req.status(500).send({msg : "Error Message"  , error : error.message})
    } 

    
}


const deleteUser = async function(req,res){
    try{

        const userId = req.params.userId

        let user = await userModel.findById(userId);
        
        if (!user) {
          return res.status(401).send("No such user exists");
        }
        let userData = req.body;
        
        const updateUser = await userModel.findOneAndUpdate({_id : userId},{isDeleted:true},{new :true})
        res.status(200).send({status : true , data : updateUser})
        
      
    }
    catch(error){
        console.log({msg : "Error Message" , error : error.message})
        req.status(500).send({msg : "Error Message"  , error : error.message})  
    }

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser