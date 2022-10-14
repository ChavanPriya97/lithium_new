const url = "www.google.com"

const name = "priya"

//create function 
let printsomevalue = function(){
    console.log("i'm testing new module");
    return "module runing"
}

//make private url and function to public
module.exports.myurl = url
module.exports.myfunction = printsomevalue 
module.exports.Name = name