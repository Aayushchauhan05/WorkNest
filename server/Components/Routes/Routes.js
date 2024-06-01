const express= require("express");
const { Freelancer_reg, otpgen, business_reg, login } = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const {Applicationforwork, SendDataTocompany} = require("../Controller/Application");
const {ListprojectBybusiness, getprojectdata,project_reg, dataForAllAndFilter}= require("../Controller/project");
const { freelancerprofile } = require("../Controller/Profile");
const OracleUserverificationmail = require("../Controller/OracleUserprojecttest");
const projectsDetailsToFreelancerApi = require("../Controller/SendProjectstatustofreelancer");
const ActionFromBusinessSide = require("../Controller/ActionsOnBid");
const { projectinfo } = require("../Controller/bid");
const skillsdata = require("../models/Common/skills");
const addskills = require("../Controller/skillsapi");
const route= express.Router();

// POST-Routes
route.post("/FreelancerRegister",Freelancer_reg);// For Freelancer
route.post("/Companyreg",business_reg)// For Business
route.post("/otp_verify",otpgen);
route.post("/Listproject",Authmiddle,project_reg) // For Project
route.post("/login",login);// login
route.post("/Applyforwork",Authmiddle,Applicationforwork) // place bide
route.post("/skills",addskills)     //setting skills
route.post("/Listprojectbusiness",Authmiddle,ListprojectBybusiness)  // product Listing by company  
// GET-Routes
route.get("/Senddatatocompany",Authmiddle,SendDataTocompany) // Bid data send to company
route.get("/Getprojectdata",Authmiddle,getprojectdata)// For Business
route.get("/freelancerprofile",Authmiddle,freelancerprofile); // For Freelancer
// route.get("/Allproject",Authmiddle,dataForAllAndFilter); // For All
route.get("/EmailToOracle",OracleUserverificationmail); // For Oracle
route.get("/Projectstatus",Authmiddle,projectsDetailsToFreelancerApi);
route.get("/projectinfo/:id",projectinfo)
// PUT-routes
route.put("/Action",Authmiddle,ActionFromBusinessSide)// TO ACCEPT OR REJECT

module.exports= route;