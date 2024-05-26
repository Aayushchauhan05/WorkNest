const express= require("express");
const bodyParser = require('body-parser');
const app= express();
const connectdb= require("./Components/Database/db")
require("dotenv").config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const Authroutes= require("./Components/Routes/Routes")
const port = process.env.PORT || 5000;
app.use("/Api",Authroutes);
connectdb().then(()=>{
    app.listen(port, () => console.log( `Server running on port ${port} 🔥`));
}).catch((error)=>{
    console.log(error)
})
