const orderModel = require("../models/orderModel")

const userController = require("../controllers/userMidController")

const productController = require("../controllers/productController")
const userMidModel = require("../models/userMidModel")
const productModel = require("../models/productModel")

const createOrder = async function(req,res){
    const order = req.body
    const header = req.header

    const orderCreated = await orderModel.create(order)
    res.send({data : orderCreated })
}

const createOrder1 = async function(req ,res){
    const order = req.body
    const header = req.header

    let countuser = 0
    let countproduct = 0
    //userId is valid or not
    if(order.userId){
        const userData = await userMidModel.find()

        userData.forEach(el =>{
            if(el._id == order.userId){
                countuser++
            }
        })
    }else{
        console.log("the required key of userId is not present")
        return res.send({msg:"the required key of userId is not present"})
    }
    //productId is valid or not
    if(order.productId){
        const productData = await productModel.find()

        productData.forEach(el =>{
            if(el._id == order.productId){
                countproduct++
            }
        })
    }else{
        console.log("the required key of productId is not present")
        return res.send({msg:"the required key of productId is not present"})
    }
    //check userId and productId valid or Not
    if(countuser==0 && countproduct>0){
        console.log("id is invalid for userId")
        res.send({msg:"id is invalid for userId"})
    }
    else if(countuser>0 && countproduct==0){
        console.log("id is invalid for productId")
        res.send({msg:"id is invalid for productId"})
    }
    else if(countuser==0 && countproduct==0){
        console.log("id is invalid for productId and userId key")
        res.send({msg:"id is invalid for productId and userId key"})
    }
    else{
        //If both are Valid then  task is start
        //isfreeappuser is "true"
        if(req.headers.isfreeappuser=="true"){
            //set amount = 0  and isFreeAppUser=true
            order.amount=0
            order.isFreeAppUser=true 
            //create new order
            const orderCreated = await orderModel.create(order)
            res.send({data : orderCreated })
            }
        //isfreeappuser is not equal to "true"
        else{
            //set isFreeAppUser=false
            order.isFreeAppUser=false
            //find userId of order is match with usermodel _id then userbalanace
            const userData = await userMidModel.findOne({_id:order.userId})
            let userBalance = userData.balance
            //find productId of order is match with productmodel _id then productPrice
            const productData = await productModel.findOne({_id:order.productId})
            let productprice= productData.price

            //check userBalance is greater than productPrice then set order amount
            if(userBalance>productprice){
                order.amount = productprice//30
                //updated Balance to usermModel balance
                let newBalance =  userBalance - productprice //100-30 =70
                const userData= await userMidModel.findOneAndUpdate(
                                        {_id:order.userId},
                                        {balance:newBalance},
                                        {new:true})
                const orderCreated = await orderModel.create(order)
                res.send({data : orderCreated })
                }
            else{

                console.log("doesn't have an enough balance in user collection")
                res.send({msg:"doesn't have an enough balance in user collection"})
            }
        }
    }
            
   
    

}

const getOrderData = async function (req, res) {
    const orders = await orderModel.find()
    res.send({data: orders})
}

const getOrderWithProductAndUserDetails = async function(req,res){
    let specificOrder = await orderModel.find().populate('userId').populate('productId')
    res.send({data : specificOrder})
}
      

module.exports.createOrder1 = createOrder1
module.exports.createOrder = createOrder
module.exports.getOrderData = getOrderData
module.exports.getOrderWithProductAndUserDetails = getOrderWithProductAndUserDetails