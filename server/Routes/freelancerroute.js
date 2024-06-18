const express = require("express");
const { Freelancer_reg } = require("../Controller/Auth");
const { Authmiddle } = require("../Middleware/Middleware");
const { Applicationforwork } = require("../Controller/Application");
const {
  project_reg,
  deleteProjectFreelancer,
} = require("../Controller/project");
const { profile, profileskill } = require("../Controller/Profile");
const projectsDetailsToFreelancerApi = require("../Controller/SendProjectstatustofreelancer");
const { jobfilter } = require("../Controller/Filterapi");
const {
  addExperienceFreelancer,
  deleteExperienceFreelancer,
} = require("../Controller/addExperience");
const { freelancerData } = require("../Controller/Freelancer/employer");
const {
  freelancerInfo,
  updateFreelancer,
} = require("../Controller/Freelancer/freelancer");
const HistoryProjects = require("../Controller/Freelancer/projectsHistory");

const route = express.Router();

// freelancer Profile for freelancer routes
route.get("/freelancer/getFreelancerById/:id", Authmiddle, freelancerInfo);
route.put("/freelancer/updateFreelancerById/:id", Authmiddle, updateFreelancer);

//freelancer workHistory projects
route.get(
  "/freelancer/history/getAll",
  Authmiddle,
  HistoryProjects.getFreelancerProjects
);
route.post(
  "/freelancer/history/create",
  Authmiddle,
  HistoryProjects.createProject
);
route.put(
  "/freelancer/history/updateProject/:id",
  Authmiddle,
  HistoryProjects.updateProject
);

//freelancer freelanceProject for freelancer
route.get("/Projectstatus", Authmiddle, projectsDetailsToFreelancerApi);
route.delete("/deleteProject/:id", Authmiddle, deleteProjectFreelancer);
// route.put("/updateProject/:id",Authmiddle,UpdateFreelancer)

//freelancer skills for freelancer
route.put("/addskills", Authmiddle, profileskill);

//freelancer experience for freelancer
route.put("/deleteExperince/:id", Authmiddle, deleteExperienceFreelancer);
route.put("/addExperince", Authmiddle, addExperienceFreelancer);

//freelancer job for freelancer
route.get("/jobfilter", jobfilter);

//freelancer for job
route.post("/Applyforwork", Authmiddle, Applicationforwork); // place bide.

//freelancer for employer
route.get("/employeer/getAllFreelancer", freelancerData); // For Freelancer
route.post("/Listproject", Authmiddle, project_reg); // For Project.

module.exports = route;
