const express = require('express')
const mongoose = require('mongoose')

const app = express()

const conn = mongoose.connect('mongodb+srv://subham:subham@cluster0.ojwma.mongodb.net/scozy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.on("error", console.error.bind(console, "Connection error: "))
connection.once("open", () => {
    console.log("Connected to mongoDB successfully");
})



module.exports = connection