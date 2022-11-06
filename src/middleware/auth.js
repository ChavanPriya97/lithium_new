const jwt = require('jsonwebtoken')

const authenticate =  async function(req,res,next){

    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-token"];
    console.log(token)
    if (!token) token = req.headers["x-auth-token"];
    console.log(token)
    if(token){
        console.log("token successfully added " ,token);

        let decodedToken = jwt.verify(token, "Lithium-Authentication-Token");
        console.log(decodedToken)
        req.userId = decodedToken.userId
        if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
        
        next()
    }
    else{
        console.log("x-Auth-token key must be present")
        return res.send({msg: "x-Auth-token key must be present" });
    }
   
    
}

const authorise = function(req, res, next) {

    let userLoggedIn = req.userId

    let userToBeModified = req.params.userId

    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    next()
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise

// comapre the logged in user's id and the id in request
    //userId for which the request is made. In this case message to be posted.
    // let userToBeModified = req.params.userId
    //userId for the logged-in user
    // let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
