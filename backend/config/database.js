const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config()
const connectDatabase = () => {
  //connecting to the database

  mongoose.connect('mongodb://localhost:27017/medly').then(() => {
    console.log("server connected sucessfuly");
  }).catch((error)=>{
    console.log("can not connect to server")
    console.log(error.message)
  });
};

module.exports = connectDatabase;
