const { acceptAndRejectApplication } = require("../Utils/emailtemplates");
const { Business } = require("../models/Business/Businessreg");
const { ApplyForPosition } = require("../models/freelancer/Apply");
const { projectsDetailsToFreelancer } = require("../models/freelancer/Assignprojectschema");
const { Freelancer } = require("../models/freelancer/Freelancerreg");
const nodemailer = require('nodemailer');
async function main(action,business,freelancer,transporter) {
  
  const info = await transporter.sendMail({
    from: process.env.EMAIL, 
    to: `${freelancer.Email}`, 
    subject: "Update on Your Application", 
    html: acceptAndRejectApplication(action,business,freelancer)
   
  });

  console.log("Message sent: %s", info.messageId);
 
}
const ActionFromBusinessSide = async (req, res) => {
  try {
    const business = req.user;
    const { status, Email, projectId } = req.body;

    const verifyUser = await Business.findOne({ Email: business.Email });
    if (!verifyUser) {
      return res.status(404).json({ message: "No data found" });
    }

    const application = await ApplyForPosition.findOne({ Email });
    if (!application) {
      return res.status(404).json({ message: "Data not found" });
    }

    const updatedApplication = await ApplyForPosition.findOneAndUpdate(
      { Email },
      { status:status },
      { new: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (status === "rejected") {
      await Freelancer.findOneAndUpdate(
        { Email },
        {
          $pull: { pendingProject: projectId },
          $addToSet: { rejectedProject: projectId }
        },
        { new: true }
      );
    } else {
      await Freelancer.findOneAndUpdate(
        { Email },
        {
          $pull: { pendingProject: projectId },
          $addToSet: { acceptedProject: projectId }
        },
        { new: true }
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });
    await main(status,business,{Email:Email,projectId:projectId}, transporter);
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = ActionFromBusinessSide;
