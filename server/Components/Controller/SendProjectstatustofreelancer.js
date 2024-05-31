const { projectsDetailsToFreelancer } = require("../models/freelancer/Assignprojectschema");

const projectsDetailsToFreelancerApi= async (req,res)=>{
try {
    const {Email}= req.user;
    const data= await projectsDetailsToFreelancer.findOne({Email}).populate("ProjectListByCompany");
    if (!data) {
         return res.status(404).json({message:"No item found"});
    }
    return  res.status(200).json({data})
} catch (error) {
    console.log(error)
    return res.status(500).json({message:"Internal server error"})
}
}
module.exports= projectsDetailsToFreelancerApi;