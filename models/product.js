const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const res = require('express/lib/response')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    specs: {
        type: String,
        required: true
    },

    productId: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,

    },
    image: {
        type: String,
        required: true
    },
    box: {
        type: String,
    }

}, {
    collection: 'products'
})



const model = mongoose.model('productSchema', productSchema)

module.exports = model