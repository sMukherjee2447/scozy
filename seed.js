require('dotenv').config();
const conn = require('./db-connect')
conn()
const User = require('./models/user')
const admin = require('./adminutil')



const importData = async () => {
    try {
        await User.insertMany(admin)

        console.log('Data Inserted Successfully')
        process.exit()
    } catch (error) {
        console.log('error', error);
        process.exit(1)
    }
}

importData()