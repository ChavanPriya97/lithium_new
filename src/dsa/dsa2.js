
let missingNumber = function(){
let arr= [33, 34, 35, 37, 38]
let sum = 0  
let num = arr.length + 1
let sumofnum = (num *(33+38))/2
    // console.log(num)
    for(let i = 0 ;i<arr.length ;i++){
        sum = sum + arr[i]
    }
    let miss = sumofnum - sum
    // console.log(miss)
    return miss
}

module.exports.missingNumber = missingNumber