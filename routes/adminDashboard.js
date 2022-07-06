const express = require('express')
const router = express.Router()
const product = require('../models/product')
const User = require('../models/user')
const multer = require('multer')
const deleteController = require('../controller/deleteController')

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

router.get('/', async (req, res) => {
    const allProducts = await product.find({})
    const allUsers = await User.find({})
    res.render('adminDashboard', {
        allProducts,
        allUsers
    })
})

router.post('/', upload.single('productImage'), async (req, res) => {
    const productImage = req.file
    console.log('this is product image -->', productImage)
    console.log('this is file name -->', productImage.filename)
    image = productImage.filename

    let {
        name,
        description,
        price,
        specs,
        productId,
        box
    } = req.body
    console.log("this is new product-->", {
        name,
        description,
        price,
        specs,
        productId,
        box
    });

    let errors = []

    const findProduct = await product.findOne({
        name
    })

    if (!findProduct) {

        const new_product = await product.create({
            name,
            description,
            price,
            specs,
            productId,
            box,
            image
        })

        console.log('Product Added Successfully!!!', new_product)
        res.redirect('/scozy/admin/dashboard')
    } else {
        errors.push({
            message: "Product already Exists"
        })
        res.render('adminDashboard', {
            errors
        })
    }
})

router.delete('/:id', deleteController.delete)

module.exports = router