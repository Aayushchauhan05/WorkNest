const express= require("express");
const { Freelancer_reg} = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const {Applicationforwork,} = require("../Controller/Application");
const {project_reg}= require("../Controller/project");
const {profile } = require("../Controller/Profile");
const projectsDetailsToFreelancerApi = require("../Controller/SendProjectstatustofreelancer");
const { jobfilter } = require("../Controller/Filterapi");

const route= express.Router();


// routes
route.post("/FreelancerRegister",Freelancer_reg);// For Freelancer x
route.post("/Listproject",Authmiddle,project_reg) // For Project.
route.post("/Applyforwork",Authmiddle,Applicationforwork) // place bide.
route.get("/Projectstatus",Authmiddle,projectsDetailsToFreelancerApi);
route.get("/jobfilter",jobfilter)
module.exports= route;