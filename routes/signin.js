const express = require('express');
const router = express.Router()

const bcrypt = require('bcryptjs')
const User = require('../models/user')

router.get('/', (req, res) => {
    res.render('signin')
})

router.post('/', async (req, res) => {
    let {
        uname,
        password
    } = req.body

    console.log('login credentials-->', {
        uname,
        password
    })

    let errors = []

    const user = await User.findOne({
        username: uname
    })

    console.log('this is the user-->', user)

    if (user) {
        const isMatch = bcrypt.compareSync(password, user.hashed_pass1)

        const login_token = user.register_token
        console.log("login token -->", login_token)

        res.cookie("JWT", login_token, {
            expires: new Date(Date.now() + 30000),
            httpOnly: true
        })
        if (isMatch) {
            res.redirect('/scozy/home')
        } else {
            errors.push({
                message: "Authentication failed / Invalid Password"
            })
            res.render('signin', {
                errors
            })
        }
    } else {
        errors.push({
            message: "User not found, please register first"
        })
        res.render('signin', {
            errors
        })
    }
})

module.exports = router