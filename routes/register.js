const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const upload = multer({
    storage: storage
})

router.get('/', (req, res) => {
    res.render('registration')
})

router.post('/', upload.single('image'), async (req, res) => {
    const image = req.file
    console.log("this is image -->", image)
    console.log("this is file name -->", image.filename)
    filename = image.filename
    let {
        fname,
        lname,
        email,
        pass,
        pass2,
        username,
        gender
    } = req.body

    console.log('the details -->', {
        fname,
        lname,
        email,
        pass,
        pass2,
        gender,
        username
    })

    let errors = []

    if (!fname || !lname || !email || !pass || !pass2 || !username) {
        errors.push({
            message: "Please enter all the fields"
        })
    }

    if (pass.length < 6) {
        errors.push({
            message: "Password should be at least 6 charecters long"
        });
    }

    if (pass != pass2) {
        errors.push({
            message: "Passwords do not match"
        });
    }

    if (errors.length > 0) {
        res.render('registration', {
            errors
        })
    } else {
        const register_token = await User.generateAuthToken()
        console.log("this is the register token -->", register_token);

        res.cookie("JWT", register_token, {
            expires: new Date(Date.now() + 5000000)
        })

        const user = await User.findOne({
            username
        })

        if (!user) {
            var hashed_pass1 = bcrypt.hashSync(pass, 10)
            console.log(hashed_pass1)

            var hashed_pass2 = bcrypt.hashSync(pass2, 10)
            console.log(hashed_pass2)

            const new_user = await User.create({
                fname,
                lname,
                email,
                gender,
                hashed_pass1,
                hashed_pass2,
                register_token,
                username,
                filename
            })

            console.log("user successfully created -->", new_user);
            res.redirect('/scozy/users/sign-in')
        } else {
            errors.push({
                message: "Username already exists"
            })
            res.render('registration', {
                errors
            })
        }
    }
})

module.exports = router