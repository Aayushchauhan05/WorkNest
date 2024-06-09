const { unsolicitedJobOffer } = require("../Utils/emailtemplates");
const { Business } = require("../models/Business/Businessreg");
const { Freelancer } = require("../models/freelancer/Freelancerreg")
const nodemailer = require('nodemailer');

// send all freelancer data
const freelancerData= async ()=>{
    try {
        const user= await Freelancer.find();
return res.status(200).json({user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"})
    }
}
// send individual data for infopage
const freelancerInfo= async (req,res)=>{
try {
    const {id}=req.params;
    const user= await Freelancer.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'not user found' });
    }
 return res.status(200).json({ user});
} catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' });
}
}
// send mail to freelancer 
async function main(business, user,transporter) {
  
    const info = await transporter.sendMail({
      from: process.env.EMAIL, 
      to: `${user.Email}`, 
      subject: "Job Offer", 
      html: unsolicitedJobOffer(business,user)
     
    });
  
    console.log("Message sent: %s", info.messageId);
   
  }
const hireFreelancer= async (req,res)=>{
try {
    const {id}= req.params;
    const business= req.user;
    const user= await Freelancer.findById(id);
    if (!user) {
        return res.status(404).json({message:"User not found"})
    }
    const company= await Business.findOneAndUpdate({Email:business.Email},{$addToSet:{ hirefreelancer:{freelancer:id}}})
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PASS,
        },
      });
      await main(business, user, transporter);
      return res.status(200).json({message:"Email sent to freelancer"})
} catch (error) {
    console.log(error);
return res.status(500).json({message:"Internal server error"})
}
}
module.exports={freelancerData,freelancerInfo,hireFreelancer}