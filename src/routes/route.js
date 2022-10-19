const { count } = require('console');
const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

let players = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": ["swimming"]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    }
]

//que 1 that saves a new player’s details
// router.post('/players', function (req, res) {
 
//     //LOGIC WILL COME HERE
//     let element = req.body.element
//     players.push(element)
//     console.log({ data: players , status: true } )
//     res.send(  { data: players , status: true } )
// })


//que 2 Write a POST /players api that creates a new player
//  ( i.e. that saves a player’s details and doesn’t
//  allow saving the data of a player with a name that already exists in the data)

router.post('/players', function (req, res) {
 
    //LOGIC WILL COME HERE
    let element = req.body.element
    console.log(element.name)
    let count = 0
    for(let i = 0 ; i<players.length ; i++){
        console.log(players[i].name + "=" + element.name)
        if(players[i].name == element.name){
            count = count + 1
        }
    }

    if(count==1){
        console.log('The data of a player with a name that already exists in the data')
        res.send('the data of a player with a name that already exists in the data')
    }
    else{
        players.push(element)
        console.log({ data: players , status: true } )
        res.send(  { data: players , status: true } )
    }
})
 
    
module.exports = router;