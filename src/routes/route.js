const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Create author
router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

//Create  Publisher
router.post("/createPublisher",publisherController.createPublisher)

router.get("/getPublisherData",publisherController.getPublisherData)

//Create Book
router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

// Book Details with Author and Publisher
router.get("/getBooksWithAuthorPublisherDetails", bookController.getBooksWithAuthorPublisherDetails)

//Updated Hardcover value
router.put("/updateHardCover",bookController.updateHardCover)

//Updated book price
router.put("/updatePrice",bookController.updatePrice)


module.exports = router;