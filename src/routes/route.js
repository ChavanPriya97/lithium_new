const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")

//Assignment
const coWaxinController = require("../controllers/coWaxinController")

const weatherController = require("../controllers/weatherController")

const memesController = require("../controllers/memesController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// Assignment
//vaccination sessions by district id
router.get("/coWaxin/getByDistrictId",coWaxinController.getByDistrictId)

//Weather of city
router.get("/weather/getCityWeather",weatherController.getCityWeather)

//Weather for london city
router.get("/weather/getLondonWeather",weatherController.getLondonWeather)

//sorting city using city temp
router.get("/weather/sortCityUsingTemp",weatherController.sortCityUsingTemp)


//get All memes data
router.post("/memes/getMemesData",memesController.getMemesData)
//create memes 
router.post("/memes/createdMemes",memesController.createdMemes)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

module.exports = router;