const { Business } = require("../models/Business/Businessreg");
const { ApplyForPosition } = require("../models/freelancer/Apply");
const { AppliedCandidates } = require("../models/Business/ProjectSchema");
const { projectsDetailsToFreelancer } = require("../models/freelancer/Assignprojectschema");
const { Freelancer } = require("../models/freelancer/Freelancerreg");

const Applicationforwork = async (req, res) => {
  try {
    const {companyemail, desiredSalary, role, projectId } = req.body;
    const { firstName, Email, phone } = req.user;
console.log("email",companyemail)
    const companyExist = await Business.findOne({ Email: companyemail });
    if (!companyExist) {
      return res.status(404).json({ message: "Company does not exist" });
    }

    const application = await ApplyForPosition.create({
     Email,
      desiredSalary,
      role,
      projectId
    });

    // const projectDetailsToDashboardCheck = await projectsDetailsToFreelancer.findOne({ Email });
    // if (!projectDetailsToDashboardCheck) {
    //   await projectsDetailsToFreelancer.create({ Email, pendingProject: [projectId] });
    // } else {
    //   await projectsDetailsToFreelancer.findOneAndUpdate(
    //     { Email },
    //     { $push: { pendingProject: projectId } },
    //     { new: true }
    //   );
    // }
    const user= await Freelancer.findOneAndUpdate({Email}, { $addToSet: { pendingProject: projectId } },
           { new: true })

    const { _id } = application;
    console.log(_id);

    // const previousCandidates = await AppliedCandidates.findOne({ Email: companyemail });
    // if (!previousCandidates) {
    //   await AppliedCandidates.create({
    //     companyName,
    //     email: companyemail,
    //     AppliedCandidates: [_id]
    //   });
    // } else {
      await Business.findOneAndUpdate(
        { Email: companyemail },
        { $push: { AppliedCandidates: _id } },
        { new: true }
      );
    // }

    return res.status(200).json({ message: "Application submitted successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const SendDataTocompany = async (req, res) => {
  try {
    const { Email } = req.user;
    const data = await Business.findOne({ Email }).populate("Appliedcandidates").populate("projectId");
    if (!data) {
      return res.status(404).json({ message: "No applications found" });
    }
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { Applicationforwork, SendDataTocompany };
