const express = require('express');
const router = express.Router();
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const commonMW = require ("../middlewares/commonMiddlewares")
//user Controller
const userMidController = require("../controllers/userMidController")
//product Controller
const productController = require("../controllers/productController")
//order Controller
const orderController = require("../controllers/orderController")
//midddleware 2
const middleware2 = require("../middlewares/middlewareSession2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )

// router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

// router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

// router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

//User Api for create new User
router.post("/createUser1",middleware2.newmiddleware ,userMidController.createUser1)
//get DATA from User 
router.get("/getUserData" ,userMidController.getUserData)

//Product Api for create new Product
router.post("/createProduct" ,productController.createProduct)
//get Products
router.get("/getProductData",productController.getProductData)

//Order Api for create order
router.post("/createOrder",middleware2.newmiddleware,middleware2.middlewareForId, orderController.createOrder )
//get Orders
router.get("/getOrderData",orderController.getOrderData)

//get Populated data of user and Product 
router.get("/getOrderWithProductAndUserDetails",orderController.getOrderWithProductAndUserDetails)

module.exports = router;