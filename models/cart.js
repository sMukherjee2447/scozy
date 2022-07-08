const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
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

    image: {
        type: String,
        required: true
    }

}, {
    collection: 'cart'
})

const model = mongoose.model('cart', cartSchema)

module.exports = model