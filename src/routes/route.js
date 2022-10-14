const express = require('express');
const { myurl } = require('../test1');
const router = express.Router();

// accept the request
const xyz = require("../test1")
//const xyz =reuire("./test1")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/abc', function (req, res) {
    console.log(" url here : " , xyz.myurl)
    console.log(" function here :" , xyz.myfunction() )
    console.log("name ",xyz.Name)
    res.send('additional test') 
    res.send('test exicuted properly')
   // res.send('additional test')

});
module.exports = router;