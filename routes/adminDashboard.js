const express = require('express')
const router = express.Router()
const product = require('../models/product')
const User = require('../models/user')

router.get('/', async (req, res) => {
    const allProducts = await product.find({})
    const allUsers = await User.find({})
    res.render('adminDashboard', {
        allProducts,
        allUsers
    })
})

module.exports = router