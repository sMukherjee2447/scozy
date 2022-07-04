require('dotenv').config()
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const conn = require('./db-connect')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public/video')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.set('view engine', 'ejs')


//routes
const indexRouter = require('./routes/index')
app.use('/', indexRouter)

const homeRouter = require('./routes/home')
app.use('/scozy/home', homeRouter)

const registerRouter = require('./routes/register')
app.use('/scozy/users/register', registerRouter)

const signinRouter = require('./routes/signin')
app.use('/scozy/users/sign-in', signinRouter)

const forgotPasswordRouter = require('./routes/forgotPassword')
app.use('/scozy/users/forgot-password', forgotPasswordRouter)

const productDetailsRouter = require('./routes/productDetails')
app.use('/scozy/products', productDetailsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})