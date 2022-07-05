require('dotenv').config()
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const User = require('./models/user')
const conn = require('./db-connect')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cookieParser())

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public/video')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/uploads')));
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

const adminSigninRouter = require('./routes/adminSingin')
app.use('/scozy/admin/sign-in', adminSigninRouter)

const adminDashboardRouter = require('./routes/adminDashboard')
app.use('/scozy/admin/dashboard', adminDashboardRouter)

const forgotPasswordRouter = require('./routes/forgotPassword')
app.use('/scozy/users/forgot-password', forgotPasswordRouter)

const productDetailsRouter = require('./routes/productDetails')
app.use('/scozy/products', productDetailsRouter)

const updateProductRouter = require('./routes/updateProduct')
app.use('/scozy/admin/dashboard/updateProduct/', updateProductRouter)

const updateUserRouter = require('./routes/updateUser')
app.use('/scozy/admin/dashboard/updateUser/', updateUserRouter)

app.get('/logout', async (req, res) => {
    const token = req.cookies.JWT
    const verifyUser = jwt.verify(token, process.env.JWT_SECRET)
    console.log(verifyUser)

    const user_data = await User.findOne({
        "register_token": verifyUser.token
    })

    console.log(user_data)
    req.token = token
    req.user_data = user_data
    try {
        res.clearCookie("JWT")

        console.log("logout Successful");
        res.redirect('/')
    } catch (error) {
        res.send('login in first')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})