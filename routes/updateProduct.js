const express = require('express')
const router = express.Router()
const products = require('../models/product')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const allProducts = await products.findOne({
        "_id": id
    })

    res.render('updateProduct', {
        allProducts
    })
})

router.post('/:id', async (req, res) => {
    const id = req.params.id

    let {
        name,
        description,
        price,
        box,
        specs,

    } = req.body

    console.log('This is the details from product update page -->', {
        name,
        description,
        price,
        box,
        specs,

    })

    const updatedProduct = await products.findOneAndUpdate({
        "_id": id
    }, {
        "$set": {
            "name": name,
            "description": description,
            "price": price,
            "box": box,
            "specs": specs
        }
    })
    console.log("product updated successfully", updatedProduct)
    res.redirect('/scozy/admin/dashboard')
})

module.exports = router