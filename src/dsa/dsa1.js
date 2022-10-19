
let missingNumber = function(){
    let arr= [1,2,3,5,6,7]
    let sum =0  
    let num = arr.length + 1
    let sumofnum = (num *(num+1))/2
    // console.log(sumofnum)
    for(let i = 0 ;i<arr.length ;i++){
        sum = sum + arr[i]
    }
    let miss = sumofnum - sum
    // console.log(miss)
    return miss
}

module.exports.missingNumber = missingNumber

