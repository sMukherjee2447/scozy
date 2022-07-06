
Scozy (Node.js Exam) Documentation

Introduction:
This is an eCommerce API with JWT Authentication, named Scozy, as given in Node.js exam

Packages used in the project : 

    1. Node.js framework Express.js.
    2. Mongodb use for database .
    3. Mongoose for all schema validation and database connection.
    4. JsonwebToken for create jsonwebtoken.
    5. BcryptJs for password encryption.
    6. Nodemon for automatically restarting the server during development
    7. Cookie-parser for creating and deleting cookies 
    8. Multer for file upload
    9. Ejs for creating the front end
    10. Dotenv for use environment variable.
    11. Body-Parser

Installation : 
 
 Step 1: configuring the .env file

within the project directory, you will find a .env.example file, just rename it as .env. In the .env file you will find the MONGODB_URI and JWT_SECRET. You can change the MONGO_URI to your personal URI, the current URI belongs to MongoDb Atlas, so even if you don't change the URI it will work fine. 

 Step 2: Running the Project :

    ⦁	First npm install, in your terminal,  for installing all packages latest version.
    ⦁	npm start,  to run the Project. (wait untill it shows "MongoDb connected successfully")


Dummy id and password :
     ⦁ for admin login -  id : s@m , password: subham
     ⦁ for user login - id : subham, password: subham