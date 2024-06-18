const express = require("express");
const { login, otpverify } = require("../Controller/Auth");
const { Authmiddle } = require("../Middleware/Middleware");
const { dataForAllAndFilter } = require("../Controller/project");
const { profile, editProfile } = require("../Controller/Profile");
const { projectinfo } = require("../Controller/projectinfo");
const { freelancerInfo } = require("../Controller/Freelancer/freelancer");
const { freelancerData } = require("../Controller/Freelancer/employer");
const { sendUserProjectToOracle } = require("../Controller/Freelancer/oracle");

const route = express.Router();

//authentications related
route.post("/login", login); // login.
route.get("/profile", Authmiddle, profile);
route.post("/otp", otpverify);

//Freelancer Project
route.get("/Allproject", dataForAllAndFilter); // For All
route.get("/projectinfo/:id", projectinfo);
route.put("/editprofile", Authmiddle, editProfile);

//Freelancer Profile for employeer
route.get("/allFreelancer", freelancerData);
route.get("/freelancerinfo/:id", freelancerInfo);

//Freelancer Profile for oracle
route.put("/projectDetailToOracle", sendUserProjectToOracle);

module.exports = route;
