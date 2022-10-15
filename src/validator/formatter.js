let str = "FunctionUp"

let trim = function(){
    let lower = str.toLowerCase()
    console.log("The lower case :" ,lower)

    let upper = str.toUpperCase()
    console.log("The upper case : " ,upper)

    return "trim string"
}

module.exports.trim = trim
