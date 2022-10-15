const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
// importing logger.js module
const welcome_mod1 = require('../logger/logger.js')
// importing helper.js module
const date_mod2 = require('../util/helper.js')
// importing formatter.js module
const trim_mod3 = require('../validator/formatter.js')
//importing external package
const underscore = require('underscore')
const lodash = require('lodash')


router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)

    //result of underscore
    console.log("The result of underscores examples api is : ", result)

    //result of welcome module
    console.log("result of welcome module" , welcome_mod1.welcome())

    //result of ,result date , month module
    console.log("The result of ",date_mod2.getBatchInfo())
    console.log("Today date is" , date_mod2.getDate())
    console.log("Month is ",date_mod2.getMonth())

    //result of trim
    console.log("The result of trim:", trim_mod3.trim())

    // lodash :-
    // chunk function
    let array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let r1 = lodash.chunk(array,4)
    console.log("chunk function result ",r1)    

    //tail function
    let numArray = [1,3,5,7,9,11,13,15,17,19]
    let r2 = lodash.tail(numArray)
    console.log("result of tail function " , r2)

    //union function
    let arr = [1,2,5,7,9,3,2,7,5,9,0,1]
    let r3 = lodash.union(arr)
    console.log("union function result ", r3)

    //frompairs function
    let pairArray = [["horror","The Shining"],["drama","Titanic"],
                    ["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    
    let r4 = lodash.fromPairs(pairArray)
    console.log("fromPairs function result" , r4)


    res.send('My first ever api!')



    //To be tried what happens if we send multiple response

    //res.send('My second api!')
});

module.exports = router;

