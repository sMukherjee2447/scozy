const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const admin = [{
        fname: 'subham',
        lname: 'mukherjee',
        email: 'subham@mukherjee',
        hashed_pass1: bcrypt.hashSync('123456789'),
        hashed_pass2: bcrypt.hashSync('123456789'),
        register_token: jwt.sign('subham', process.env.JWT_SECRET),
        username: 'su@mu',
        type: 'Admin'
    },
    {
        fname: 'deb',
        lname: 'kandar',
        email: 'deb@kandar',
        hashed_pass1: bcrypt.hashSync('1234567890'),
        hashed_pass2: bcrypt.hashSync('1234567890'),
        register_token: jwt.sign('debkandar', process.env.JWT_SECRET),
        username: 'd@k',
        type: 'Admin'
    }
]

module.exports = admin