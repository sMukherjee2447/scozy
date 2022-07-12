const express = require('express')
const router = express.Router()
const Products = require('../models/product')
const User = require('../models/user')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())



router.get('/', async (req, res) => {
    const allProducts = await Products.find({})

    const isCookie = req.cookies.User_Cookie
    console.log("This is the cookie in home page ==>", isCookie)

    const userData = await User.findOne({"fname":isCookie})
    console.log('this is user data from home page ==>', userData);

    // console.log('all products-->', allProducts);   
    res.render('home', {
        allProducts,
        userData
    })
})

module.exports = router