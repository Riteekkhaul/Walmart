const app = require('./app')
const dotenv = require('dotenv');
const connectDatabase = require("./config/database")
const cloudinary = require("cloudinary");


// handelinh uncaught error (not defiened error)
 process.on('uncaughtException', err =>{
    console.log(`Error:,${err.message}`);
    console.log("Shuting Down the server due to unhandeled uncaught error ");
    process.exit(1);
 });

// config 
dotenv.config({path:"./backend/config/config.env"})

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  

 const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})


// Unhandeled Promise Rejection 

process.on("unhandledRejection" , err =>{
    console.log(`Error:,${err.message}`);
    console.log("Shuting Down the server due to unhandeled promise rejection ");

    server.close(()=>{
        process.exit(1);
    })
})