const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const publisherController = require("../models/publisherModel")
const auhtorController = require("../controllers/authorController")

const createBook= async function (req, res) {

    let book = req.body
    if(!book.author){
        console.log("Author Id is required")
        res.send("Author Id is required")
    }
    else if(!book.publisher){
        console.log("Publisher Id is required")
        res.send("Publisher Id is required")
    }
    else{
        let authordata = await authorModel.find()
        var count = 0
        authordata.forEach(el =>{
            if(el._id==book.author){
                count++
            }
        })

        let publisherdata = await publisherModel.find()
        let count1 = 0
        publisherdata.forEach(el =>{
            if(el._id==book.publisher){
                count1++
            }
        })

        if(count>0 && count1>0){
            let bookCreated = await bookModel.create(book)
            res.send({data: bookCreated})
        }
        else if(count==0 && count1>0){
            console.log("Author is not valid")
            res.send("Author id is not valid")
        }
        else if(count>0 && count1==0){
            console.log("Pubisher is not valid")
            res.send("Publisher id is not valid")
        }
        else {
            console.log("Author and Publisher is not valid")
            res.send("Author and Publisher  is not valid")
        }
    }
    // let bookCreated = await bookModel.create(book)
    // res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorPublisherDetails = async function (req, res) {
    // let specificBook = await bookModel.find().populate('author_id')
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}

const updateHardCover = async function(req,res){
    let updatedBook = await bookModel.find().populate('author').populate('publisher')

    updatedBook.forEach(el =>{
        if(el.publisher.name == 'Penguin' || el.publisher.name == 'HarperCollins'){
            el.isHardCover = true
        }
    })
    res.send({data : updatedBook})
}

const updatePrice = async function(req,res){
    let updatedBook = await bookModel.find().populate('author').populate('publisher')

    updatedBook.forEach(el =>{
        if(el.author.rating >3.5){
            el.price = el.price + 10 ;           
        }
    })
    res.send({data : updatedBook})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorPublisherDetails = getBooksWithAuthorPublisherDetails
module.exports.updateHardCover = updateHardCover
module.exports.updatePrice = updatePrice