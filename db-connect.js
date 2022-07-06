const express = require('express')
const mongoose = require('mongoose')

const app = express()

const conn = mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.on("error", console.error.bind(console, "Connection error: "))
connection.once("open", () => {
    console.log("Connected to mongoDB successfully");
})



module.exports = connection