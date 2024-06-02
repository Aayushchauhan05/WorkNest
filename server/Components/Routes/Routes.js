const express= require("express");
const { Freelancer_reg, otpgen, business_reg, login } = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const {Applicationforwork, SendDataTocompany} = require("../Controller/Application");
const {ListprojectBybusiness, getprojectdata,project_reg, dataForAllAndFilter}= require("../Controller/project");
const {profile } = require("../Controller/Profile");
const OracleUserverificationmail = require("../Controller/OracleUserprojecttest");
const projectsDetailsToFreelancerApi = require("../Controller/SendProjectstatustofreelancer");
const ActionFromBusinessSide = require("../Controller/ActionsOnBid");
const { projectinfo } = require("../Controller/bid");
const skillsdata = require("../models/Common/skills");
const addskills = require("../Controller/skillsapi");
const route= express.Router();

// POST-Routes
route.post("/FreelancerRegister",Freelancer_reg);// For Freelancer x
route.post("/Companyreg",business_reg)// For Business.
route.post("/otp_verify",otpgen);
route.post("/Listproject",Authmiddle,project_reg) // For Project.
route.post("/login",login);// login.
route.post("/Applyforwork",Authmiddle,Applicationforwork) // place bide.
route.post("/skills",addskills)     //setting skills.
route.post("/Listprojectbusiness",Authmiddle,ListprojectBybusiness)  // product Listing by company (loading)
// GET-Routes
route.get("/Senddatatocompany",Authmiddle,SendDataTocompany) // Bid data send to company x
route.get("/Getprojectdata",Authmiddle,getprojectdata)// For Business.
route.get("/profile",Authmiddle,profile); // For Freelancer.
route.get("/Allproject",dataForAllAndFilter); // For All
route.get("/EmailToOracle",OracleUserverificationmail); // For Oracle x
route.get("/Projectstatus",Authmiddle,projectsDetailsToFreelancerApi);
route.get("/projectinfo/:id",projectinfo)
// PUT-routes
route.put("/Action",Authmiddle,ActionFromBusinessSide)// TO ACCEPT OR REJECT x

module.exports= route;