const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const admin = [{
        fname: 'Subham',
        lname: 'Mukherjee',
        email: 'subham@mukherjee',
        hashed_pass1: bcrypt.hashSync('subham'),
        hashed_pass2: bcrypt.hashSync('subham'),
        register_token: jwt.sign('subham', process.env.JWT_SECRET),
        username: 's@m',
        type: 'Admin'
    },
    {
        fname: 'Subha',
        lname: 'Mukherjee',
        email: 'sm@sm',
        hashed_pass1: bcrypt.hashSync('subham'),
        hashed_pass2: bcrypt.hashSync('subham'),
        register_token: jwt.sign('subha', process.env.JWT_SECRET),
        username: 'sub@muk',
        type: 'Admin'
    }
]

module.exports = admin