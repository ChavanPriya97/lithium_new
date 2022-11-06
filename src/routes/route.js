const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const loginController = require("../controllers/loginController")

// middleware
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// create user
router.post("/createUser", userController.createUser)

// user login 
router.post("/login", loginController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.authenticate, middleware.authorise,userController.getUserData)

//add Posts
router.post("/users/:userId/posts",middleware.authenticate,middleware.authorise, userController.postMessage)

//Update User details
router.put("/users/:userId",middleware.authenticate,middleware.authorise, userController.updateUser)

//Delete status  
router.delete('/users/:userId',middleware.authenticate,middleware.authorise, userController.deleteUser)

module.exports = router;