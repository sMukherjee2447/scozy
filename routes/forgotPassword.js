const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.render('forgotPassword')
})

router.post('/', async (req, res) => {
    let {
        uname,
        newPass,
        newPass2
    } = req.body

    console.log("This is forgot password details -->", {
        uname,
        newPass,
        newPass2
    })

    let errors = []

    const findUser = await User.findOne({
        "username": uname
    })

    console.log("This is the user-->", findUser._id);

    if (findUser) {
        var newHashedPass = bcrypt.hashSync(newPass, 10)
        console.log(newHashedPass);

        var newHashedPass2 = bcrypt.hashSync(newPass2, 10)
        console.log(newHashedPass2)


        var update = await User.findOneAndUpdate({
            "_id": findUser._id
        }, {
            "$set": {
                "hashed_pass1": newHashedPass,
                "hashed_pass2": newHashedPass2
            }
        })

        console.log("Password updated Successfully!!!!", update);
        res.redirect('/scozy/users/sign-in')
    } else {
        errors.push({
            message: "Email not found"
        })
    }
})

module.exports = router