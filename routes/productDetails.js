const express = require('express');
const router = express.Router();
const products = require('../models/product');

router.get('/:prodId/:id', async (req, res) => {
    const id = req.params.id
    const product = await products.findOne({
        "_id": id
    })
    res.render('productDetails', {
        product
    })
})

module.exports = router