const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../models/user')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get("/", async (req, res) => {

    const isCookie = req.cookies.User_Cookie

    const cartData = await User.findOne({"username" : isCookie})
    console.log('this is the cart data from cart page ==>', cartData);
    res.render('cart')
})

module.exports = router