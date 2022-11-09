const axios = require("axios")
const getByDistrictId = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query id : ${district_id} ${date}`)
        var options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }

        let district = await axios(options)
        console.log(district.data)
        let temp = district.data.main["temp"]
        console.log({temp : temp})
        res.status(200).send({ message: district.data });

    }
    catch (err) {
        console.log({ status: false, error: err.message })

        res.status(500).send({ status: false, error: err.message })
    }

}

module.exports.getByDistrictId = getByDistrictId