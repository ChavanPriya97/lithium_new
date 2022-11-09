const axios = require("axios")


const getMemesData = async function (req, res) {
    try {
        var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let memesData = await axios(options)
        console.log(memesData.data)
        let data = memesData.data
        res.status(200).send({ status : true ,message: data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}

const getMemesById = async function (req, res) {
    try {
        let id = req.query.id
        var options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?id=${id}`
        }
        let memesData = await axios(options)
        console.log(memesData.data)
        let data = memesData.data
        res.status(200).send({ status : true ,message: data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}

module.exports.getMemesData = getMemesData

module.exports.getMemesById = getMemesById