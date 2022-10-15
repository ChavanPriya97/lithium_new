let getBatchInfo = function(){
    console.log("Lithium" + " " + "W3"+ " "+"D5"+ " "+ "the topic for today is Nodejs module system")
        return "batch info"
}

let getDate=function(){
    let date = new Date()
    // console.log(date)
    return date
}

let getMonth = function(){
    let date = new Date()
    let month = date.getMonth()

    // console.log(month)
    return month+1
}

module.exports.getBatchInfo = getBatchInfo
module.exports.getDate = getDate
module.exports.getMonth = getMonth