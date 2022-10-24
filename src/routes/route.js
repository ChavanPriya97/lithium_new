const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

const BookModel= require('../models/bookmodel')
const BookController = require('../controllers/bookController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//user Data api
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

//book data api
router.post("/createBook",BookController.createBook)

router.get("/getBookData",BookController.getBookData)

module.exports = router;