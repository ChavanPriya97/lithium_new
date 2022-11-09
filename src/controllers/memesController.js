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


let createdMemes = async function(req,res){
    try{

        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options ={
            method : "get",
            url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }

        let createdMemes = await axios(options)

        let data = createdMemes.data

        res.status(200).send({status : true , message : data})
    }
    catch(error){
        res.status(500).send({status : false , error : error.message})
    }
}
module.exports.getMemesData = getMemesData

module.exports.createdMemes = createdMemes