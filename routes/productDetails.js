const express = require('express');
const router = express.Router();
const products = require('../models/product');
const bodyParser = require('body-parser')
const User = require('../models/user')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/:prodId/:id', async (req, res) => {
    const id = req.params.id
    const product = await products.findOne({
        "_id": id
    })
    res.render('productDetails', {
        product
    })
})

router.post('/:prodId/:id', async (req,res)=>{
    const id = req.params.id
    const product = await products.findOne({
        "_id": id
    }) 

    const isCookie = req.cookies.User_Cookie

    console.log('this is the cookie ==>', isCookie)
    console.log('this is the name ==>', product.name)
    console.log('this is the price ==>', product.price)

    const findUser = await User.findOne({
        "username": isCookie
    })

    

    console.log("the updated user -->", findUser);


})



module.exports = router