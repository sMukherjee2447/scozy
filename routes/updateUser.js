const express = require('express');
const router = express.Router();
const User = require('../models/user');
const deleteUser = require('../controller/userDeleteController')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const allUser = await User.findOne({
        "_id": id
    })
    res.render('updateUser', {
        allUser
    });
})

router.post('/:id', async (req, res) => {
    const id = req.params.id

    let type = req.body.type

    console.log(type);

    const updatedUser = await User.findOneAndUpdate({
        "_id": id
    }, {
        "$set": {
            "type": type
        }
    })

    console.log("user updated successfully", updatedUser)
    res.redirect('/scozy/admin/dashboard')
})

router.delete('/:id', deleteUser.delete)

module.exports = router