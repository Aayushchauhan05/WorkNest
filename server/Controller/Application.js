const { Business } = require("../models/Business/Businessreg");
const { ApplyForPosition } = require("../models/freelancer/Apply");
const { AppliedCandidates, ProjectListByBusiness } = require("../models/Business/ProjectSchema");
const { projectsDetailsToFreelancer } = require("../models/freelancer/Assignprojectschema");
const { Freelancer } = require("../models/freelancer/Freelancerreg");

const Applicationforwork = async (req, res) => {
  try {
    const { companyemail, desiredSalary, role, projectId, category } = req.body;
    const { firstName, Email, phone, _id } = req.user;

    console.log("email", companyemail);

    // Check if the company exists
    const companyExist = await Business.findOne({ Email: companyemail });
    if (!companyExist) {
      return res.status(404).json({ message: "Company does not exist" });
    }

    // Create a new application
    const application = await ApplyForPosition.create({
      Email,
      desiredSalary,
      role,
      projectId
    });

    // Update the freelancer's pending projects
    await Freelancer.findByIdAndUpdate(
      { _id },
      { $addToSet: { pendingProject: projectId } },
      { new: true }
    );

    const applicationid = application._id;
    console.log(_id);

    // Update the business with the new application
    await Business.findOneAndUpdate(
      { Email: companyemail },
      { $push: { AppliedCandidates: applicationid } },
      { new: true }
    );

    // Update the project details and add the candidate to the appliedCandidates array
    const projectDetail = await ProjectListByBusiness.findOneAndUpdate(
      { _id: projectId, "TotalNeedOffreelancer.category": category },
      { $addToSet: { "TotalNeedOffreelancer.$.appliedCandidates": _id } },
      { new: true }
    );

    if (projectDetail) {
      const categoryDetail = projectDetail.TotalNeedOffreelancer.find(item => item.category === category);

      if (categoryDetail && categoryDetail.accepted.length === categoryDetail.needOfFreelancer) {
        
        await ProjectListByBusiness.updateOne(
          { _id: projectId, "TotalNeedOffreelancer.category": category },
          { $set: { "TotalNeedOffreelancer.$.status": "not assigned" } }
        );
      }
    }

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
