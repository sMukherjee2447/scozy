require('dotenv').config();
const conn = require('./db-connect')
// conn()
const User = require('./models/user')
const adminData = require('./utils/adminutil')
const userData = require('./utils/userUtil')
const productData = require('./utils/productUtil')
const product = require('./models/product')



const importData = async () => {
    try {
        await User.insertMany(adminData)
        await User.insertMany(userData)
        await product.insertMany(productData)

        console.log('Data Inserted Successfully')
        process.exit()
    } catch (error) {
        console.log('error', error);
        process.exit(1)
    }
}

importData()