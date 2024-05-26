const express= require("express");
const { Freelancer_reg, otpgen, project_reg, business_reg, login } = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const {Applicationforwork, SendDataTocompany} = require("../Controller/Apply");
const {ListprojectBybusiness, getprojectdata}= require("../Controller/Listproject");
const route= express.Router();




// Routes
route.post("/Freelancer_Register",signupValidator,Freelancer_reg);
route.post("/otp_verify",otpgen);
route.post("/List_project",Authmiddle,project_reg)
route.post("/Company_reg",signupValidator,business_reg)
route.post("/login",loginValidator,login);
route.post("/Applyforwork",Authmiddle,Applicationforwork) // place bide
route.get("/Senddatatocompany",Authmiddle,SendDataTocompany) // Bid data send to companyy
route.post("/Listprojectbusiness",Authmiddle,ListprojectBybusiness)  // product Listing by company  
route.get("/Getprojectdata",Authmiddle,getprojectdata)

module.exports= route;