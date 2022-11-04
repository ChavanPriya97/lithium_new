const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const loginController = require("../controllers/loginController")

const middle = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//create User   
router.post("/createUser", userController.createUser  )

router.post("/login", loginController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middle.auth, userController.getUserData)

router.put("/users/:userId", middle.auth,userController.updateUser)

router.delete("/users/:userId",middle.auth,userController.deleteUser)

module.exports = router;