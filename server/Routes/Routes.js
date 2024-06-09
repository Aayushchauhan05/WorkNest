const express= require("express");
const { login,otpverify} = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const {dataForAllAndFilter}= require("../Controller/project");
const {profile, editProfile } = require("../Controller/Profile");
const { projectinfo } = require("../Controller/projectinfo");
const { freelancerData, freelancerInfo } = require("../Controller/FreelancerhireApi");


const route= express.Router();


route.post("/login",login);// login.
route.get("/profile",Authmiddle,profile); 
route.get("/Allproject",dataForAllAndFilter); // For All
route.get("/projectinfo/:id",projectinfo)
route.post("/otp",otpverify)
route.put("/editprofile",editProfile)
route.get("/allFreelancer",freelancerData)
route.get("/freelancerinfo/:id",freelancerInfo)
module.exports= route;