const express= require("express");
const { Freelancer_reg, otpgen, business_reg, login } = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const {Applicationforwork, SendDataTocompany} = require("../Controller/Application");
const {ListprojectBybusiness, getprojectdata,project_reg, dataForAllAndFilter}= require("../Controller/project");
const { freelancerprofile } = require("../Controller/Profile");
const OracleUserverificationmail = require("../Controller/OracleUserprojecttest");
const route= express.Router();




// POST-Routes
route.post("/Freelancer_Register",signupValidator,Freelancer_reg);
route.post("/otp_verify",otpgen);
route.post("/List_project",Authmiddle,project_reg)
route.post("/Company_reg",signupValidator,business_reg)
route.post("/login",loginValidator,login);
route.post("/Applyforwork",Authmiddle,Applicationforwork) // place bide
route.post("/Listprojectbusiness",Authmiddle,ListprojectBybusiness)  // product Listing by company  
// GET-Routes
route.get("/Senddatatocompany",Authmiddle,SendDataTocompany) // Bid data send to company
route.get("/Getprojectdata",Authmiddle,getprojectdata)
route.get("/freelancerprofile",Authmiddle,freelancerprofile);
route.get("/Allproject",Authmiddle,dataForAllAndFilter);
route.get("/EmailToOracle",OracleUserverificationmail);

module.exports= route;