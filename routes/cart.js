const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cartController = require('../controller/cartController')
const cartData = require('../models/cart')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get("/", (req, res) => {
    res.render('cart')
})

module.exports = router