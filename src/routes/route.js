const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//question 1
// Create an API for GET /movies that returns a list of movies. 
// Define an array of movies in your code and return the value in response.

router.get('/movies',function(req,res){
    // console.log("the params of movies",req.params)

    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log("the list of movies",movies)
    res.send(movies)
})

//question 2 
// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request 
// and it should return the movie in your array at index 1). 
// You can define an array of movies again in your api

// question 3
// Handle a scenario in problem 2 where if the index is greater than the valid
//  maximum value a message is returned that
//  tells the user to use a valid index in an error message.

router.get('/movies/:indexNumber',function(req,res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    // console.log("The params in reqest : ", req.query)

    const index = req.params.indexNumber
    if(index>movies.length){
        res.send('errpr . use valid index')
    }
    else{
    res.send('the movie name using index ' +movies[index])
    }
})


// question 4
// Write another api called GET /films. Instead of an array of strings define an array of 
// movie objects this time. Each movie object should have values - id, name.
//  An example of movies array is 

router.get('/films',function(req,res){
    let film = [ {
        "id": 1,
        "name": "The Shining"
       }, 
       {
        "id": 2,
        "name": "Incendies"
       }, 
       {
        "id": 3,
        "name": "Rang de Basanti"
       }, 
       {
        "id": 4,
        "name": "Finding Nemo"
       }]

    console.log('list of film ',film)
    res.send(film)
       
})

//question 5
// Write api GET /films/:filmId where filmId is the value received in request path params.
//  Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body.
//  Example for a request GET /films/3 should return the movie object 

router.get('/films/:filmId' , function(req,res){

    let filmlist =  [ 
        {
        "id": 1,
        "name": "The Shining"
       },
       {
        "id": 2,
        "name": "Incendies"
       }, 
       {
        "id": 3,
        "name": "Rang de Basanti"
       }, 
       {
        "id": 4,
        "name": "Finding Nemo"
       }
    ]
    console.log('reqest params',req.params)

    let filmindex = req.params
    let count = 0

    for(let i = 0 ; i<filmlist.length;i++){
        if(filmlist[i].id == filmindex.filmId){
            count++
            res.send(filmlist[i])
        }
    }
    if(count == 0 ){
        res.send('No film available with this id')
    }
    
})

module.exports = router;