const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const res = require('express/lib/response')

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        // require: true
    },

    lname: {
        type: String,
        // required: true
    },

    email: {
        type: String,
        // required: true
    },

    hashed_pass1: {
        type: String,
        // required: true
    },

    hashed_pass2: {
        type: String,
        // required: true
    },
    register_token: {
        type: String,
        // required: true
    },
    gender: {
        type: String,
        // required: true
    },
    filename: {
        type: String,
    },

    username: {
        type: String,
        // required: true
    },
    type: {
        type: String,
        default: 'Normal'
    },
    cart:{
        product:{
            type:String,
            
        },
        price :{
            type: String,
            
        },
        quantity:{
            type: String
        }
    }
}, {
    collection: 'users'
})

userSchema.statics.generateAuthToken = async function () {
    try {
        const token = jwt.sign({
            _id: this._id
        }, process.env.JWT_SECRET)
        console.log("Generated token-->>", token)
        return token
    } catch (error) {
        res.send("There error part" + error);
        console.log("the error" + error);
    }
}

const model = mongoose.model('userSchema', userSchema)

module.exports = model