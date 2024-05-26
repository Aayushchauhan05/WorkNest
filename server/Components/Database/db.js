const mongoose= require("mongoose");
require("dotenv").config()
const uri=process.env.URI
// console.log(uri)
 const connectdb= async ()=>{
    try {
       await  mongoose.connect(uri);
       console.log("database is connected");
    } catch (error) {
        console.log(error);
    }
 }
 module.exports= connectdb;