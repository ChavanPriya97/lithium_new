const axios = require("axios")
//weather of city usig city name and appid/key

const getCityWeather = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query data : ${q}  ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let cityWeather = await axios(options)
        console.log(cityWeather.data)
        res.status(200).send({ message: cityWeather.data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}


const getLondonWeather = async function (req, res) {
    try {
        
        let appid = req.query.appid
        console.log(`query data : ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`
        }
        let cityWeather = await axios(options)
        console.log(cityWeather.data)
        res.status(200).send({ message: cityWeather.data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}

const sortCityUsingTemp = async function (req, res) {
    let cityName = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    try {
        let Array = []
        for (let i = 0; i < cityName.length; i++) {
            let q = cityName[i]
            let appid = req.query.appid
            console.log(`query data : ${q}  ${appid}`)
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            }
            let cityWeather = await axios(options)
            console.log(cityWeather.data)

            Array.push({
                city : cityWeather.data.name , 
                temp : cityWeather.data.main.temp
            })

        }
        //sorting city accordincg to temp value
        Array.sort((x,y)=>{
            return x.temp-y.temp
        })
        res.status(200).send({status:true, message: Array });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}

module.exports.getCityWeather = getCityWeather

module.exports.getLondonWeather = getLondonWeather

module.exports.sortCityUsingTemp = sortCityUsingTemp