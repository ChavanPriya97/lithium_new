const AuthorModel = require("../models/authorModel")
const BookNewModel = require("../models/bookNewModel")

const Authordata = async function(req,res){
    let data = req.body
    let allBooks = await AuthorModel.create(data)
    res.send({data : allBooks})
}

const BookNewdata = async function(req,res){
    let data = req.body
    let allBooks = await BookNewModel.create(data)

    res.send({data : allBooks})
}

const filterbydata = async function(req,res){
    let singleauthor = await AuthorModel.findOne({author_Name:"Chetan Bhagat"})
    let equal_id = singleauthor.author_id
    let allbooks = await BookNewModel.find({author_id:equal_id})

    res.send({data:allbooks})

}

const updateBooks = async function(req ,res){
    let updateBooks = await BookNewModel.findOneAndUpdate(
        { name : "Two states"},
        {$set :{price :500}},
        {new :true}
    )

    let authorName = await AuthorModel.findOne(
        {author_id:updateBooks.author_id})

    res.send(({data:updateBooks.price , result :authorName.author_Name}))
}

const findbyprice = async function(req,res){
    let finddata = await BookNewModel.find(
        {price : {$gte :50 ,
                    $lte :100}})
    
    let Array = []

    for(let j = 0 ; j<finddata.length ; j++){
        let id = finddata[j].author_id
        let authorName = await AuthorModel.findOne({author_id:id})
                                .select({author_Name : 1 ,author_id :1 , _id :0})

        Array.push(authorName)
    }
    res.send({data : Array})

}




module.exports.Authordata= Authordata
module.exports.BookNewdata= BookNewdata
module.exports.filterbydata =filterbydata
module.exports.updateBooks = updateBooks
module.exports.findbyprice =findbyprice