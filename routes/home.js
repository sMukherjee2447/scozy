const express = require('express')
const router = express.Router()
const Products = require('../models/product')

router.get('/', async (req, res) => {
    const allProducts = await Products.find({})
    console.log('all products-->', allProducts);
    res.render('home', {
        allProducts
    })
})

module.exports = router