const express= require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectdb= require("./Components/Database/db")
const Authroutes= require("./Components/Routes/Routes")
require("dotenv").config()
const app= express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser());
app.use(express.json())

const port = process.env.PORT || 5000;
app.use("/Api",Authroutes);
connectdb().then(()=>{
    app.listen(port, () => console.log( `Server running on port ${port} 🔥`));
}).catch((error)=>{
    console.log(error)
})
