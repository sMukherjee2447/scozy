const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const users = [{
        fname: 'Subham',
        lname: 'Mukherjee',
        email: 'subham@mukherjee',
        hashed_pass1: bcrypt.hashSync('subham'),
        hashed_pass2: bcrypt.hashSync('subham'),
        register_token: jwt.sign('subham', process.env.JWT_SECRET),
        username: 'subham',
        type: 'Normal'
    },
    {
        fname: 'Subham',
        lname: 'Mukherjee 2',
        email: 's@mukherjee',
        hashed_pass1: bcrypt.hashSync('smukherjee'),
        hashed_pass2: bcrypt.hashSync('smukherjee'),
        register_token: jwt.sign('smukherjee', process.env.JWT_SECRET),
        username: 'smukherjee',
        type: 'Normal'
    }
]

module.exports = users