const express = require('express')
const router = express.Router()
const products = require('../models/product')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/productUploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const upload = multer({
    storage: storage
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const allProducts = await products.findOne({
        "_id": id
    })

    res.render('updateProduct', {
        allProducts
    })
})

router.post('/:id', upload.single('image'), async (req, res) => {
    const id = req.params.id
    const productImage = req.file
    console.log('this is product image -->', productImage)
    console.log('this is file name -->', productImage.filename)
    image = productImage.filename
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
            "specs": specs,
            "image": image
        }
    })
    console.log("product updated successfully", updatedProduct)
    res.redirect('/scozy/admin/dashboard')
})

module.exports = router