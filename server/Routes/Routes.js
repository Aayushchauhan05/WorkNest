const express= require("express");
const { Freelancer_reg, otpgen, business_reg, login } = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const {Applicationforwork, SendDataTocompany} = require("../Controller/Application");
const {ListprojectBybusiness, getprojectdata,project_reg, dataForAllAndFilter}= require("../Controller/project");
const {profile } = require("../Controller/Profile");
const OracleUserverificationmail = require("../Controller/OracleUserprojecttest");
const ActionFromBusinessSide = require("../Controller/ActionsOnBid");
const { projectinfo } = require("../Controller/projectinfo");
const skillsdata = require("../models/Common/skills");
const addskills = require("../Controller/skillsapi");
const route= express.Router();

// POST-Routes

route.post("/login",login);// login.
route.get("/profile",Authmiddle,profile); 
route.get("/Allproject",dataForAllAndFilter); // For All
route.get("/projectinfo/:id",projectinfo)

module.exports= route;