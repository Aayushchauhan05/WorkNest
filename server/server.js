const express= require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectdb= require("./Components/Database/db")
const commonroutes= require("./Components/Routes/Routes")
const Skillsroutes= require("./Components/Routes/skills")
const Oracleroutes= require("./Components/Routes/oracleroutes")
const Interviewerrouters= require("./Components/Routes/interviewerrouter")
const freelancerroute=require("./Components/Routes/freelancerroute")
const businessroutes=require("./Components/Routes/businessroutes")
const cors= require("cors")
require("dotenv").config()
const app= express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

const corspermission = {
  origin: process.env.ORIGIN,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corspermission));

const port = process.env.PORT || 5000;
app.use("/Api", commonroutes);
app.use("/api/business",businessroutes)
app.use("/api/freelacer",freelancerroute)
app.use("/api/skills", Skillsroutes);
app.use("/api/oracle", Oracleroutes);
app.use("/api/interviewers", Interviewerrouters);
connectdb().then(()=>{
    app.listen(port, () => console.log( `Server running on port ${port} 🔥`));
}).catch((error)=>{
    console.log(error)
})
