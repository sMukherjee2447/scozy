const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.render('adminSignin')
})

router.post('/', async (req, res) => {
    let {
        uname,
        password
    } = req.body

    console.log('This is admin details-->', {
        uname,
        password
    })

    const admin = await User.findOne({
        "username": uname
    })

    let errors = []

    console.log('this is admin from database-->', admin);

    if (admin) {
        console.log("this is type-->", admin.type);
        if (admin.type !== "Admin") {
            errors.push({
                message: "You are not an Admin"
            })
            res.render('adminSignin', {
                errors
            })
        } else {
            const isMatch = bcrypt.compareSync(password, admin.hashed_pass1)

            const admin_token = admin.register_token

            res.cookie("JWT", admin_token, {
                expires: new Date(Date.now() + 30000000),
                httpOnly: true
            })

            if (isMatch) {
                res.redirect('/scozy/admin/dashboard')
            } else {
                errors.push({
                    message: "Authentication failed / Invalid Password"
                })
                res.render('adminSignin', {
                    errors
                })
            }
        }
    }
})

module.exports = router