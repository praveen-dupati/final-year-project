const app = require("./app");

const dotenv=require('dotenv')
const connectDatabase = require("./config/database");

const cloudinary=require('cloudinary')

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Handling Uncaught Exception

//Example of uncaught exception : console.log(youtube)-->here youtube is invalid
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
  


//IMp: Database must be called after setting up config file

//Now connceting to the database by calling the connectDatabase function

connectDatabase();

//cloudnari 

cloudinary.config({
  cloud_name: 'dlwkry0lx',
  api_key:'249694425532141' ,
  api_secret: 'aeDUWZVZxWYFetEyttLaYtG42Mc',
});

const server = app.listen(4000, () => {
  console.log(`server is working on https://localhost:4000`);
});


//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });