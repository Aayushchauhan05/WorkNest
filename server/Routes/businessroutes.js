const express= require("express");
const { business_reg} = require("../Controller/Auth");
const {Authmiddle, loginValidator, signupValidator} = require("../Middleware/Middleware");
const { SendDataTocompany} = require("../Controller/Application");
const {ListprojectBybusiness, getprojectdata}= require("../Controller/project");
const ActionFromBusinessSide = require("../Controller/ActionsOnBid");
const{appliedFreelancerDetails}= require("../Controller/appliedcandidatesdetails");
const { hireFreelancer } = require("../Controller/FreelancerhireApi");
const route= express.Router();

// POST-Routes
route.post("/Companyreg",business_reg)// For Business.
route.post("/Listprojectbusiness",Authmiddle,ListprojectBybusiness)  // product Listing by company (loading)
// GET-Routes
route.get("/Senddatatocompany",Authmiddle,SendDataTocompany) // Bid data send to company x
route.get("/Getprojectdata",Authmiddle,getprojectdata)// For Business.
route.put("/Action",Authmiddle,ActionFromBusinessSide)// TO ACCEPT OR REJECT x
route.get("/appliedFreelancerData/:id",Authmiddle,appliedFreelancerDetails)
route.post("/hirefreelancer/:id",Authmiddle,hireFreelancer)
module.exports= route;