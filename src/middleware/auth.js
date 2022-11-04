const jwt = require('jsonwebtoken')

const auth =  async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    console.log(token)
    if (!token) token = req.headers["x-auth-token"];
    console.log(token)
    if(token){
        console.log("token successfully added " ,token);

        let decodedToken = jwt.verify(token, "Lithium-Authentication-Token");
        if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
        
        next()
    }
    else{
        console.log("x-Auth-token key must be present")
        return res.send({msg: "x-Auth-token key must be present" });
    }
   
    
}


module.exports.auth = auth