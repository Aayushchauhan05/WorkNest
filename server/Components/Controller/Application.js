const { Business } = require("../models/Business/Businessreg");
const{ApplyForPosition}=require("../models/freelancer/Apply")
const {AppliedCandidates}= require("../models/Business/ProjectSchema");
const { projectsDetailsToFreelancer } = require("../models/freelancer/Assignprojectschema");
const Applicationforwork= async (req,res)=>{
try {
    const {address,desiredSalary,experience,role,companyemail,companyName,status,projectId}=req.body;
    const{firstName,Email,phone}=req.user;

const companyExist= await Business.findOne({Email:companyemail});

if (!companyExist) {
    return res.status(404).json({message:"Company not exist"});

}
const Application= await ApplyForPosition.create({Name:firstName,Email,phoneNumber:phone,address,desiredSalary,experience,role,companyemail,status,projectId})
const projectdetailstodashboardcheck= await projectsDetailsToFreelancer.findOne({Email})
if (!projectdetailstodashboardcheck) {
    await projectsDetailsToFreelancer.create({Email,pending:projectId})
}
await projectsDetailsToFreelancer.findOneAndUpdate({Email},{$push:{pending:projectId}})
const {_id}=Application;
console.log(_id);
const prevcandidates= await AppliedCandidates.findOne({Email:companyemail});
if (!prevcandidates) {
    await AppliedCandidates.create({companyName,email:companyemail,AppliedCandidates:_id})
}
else{
    await AppliedCandidates.findOneAndUpdate({Email:companyemail},{$push:{AppliedCandidates:_id}},{new:true});
}
return res.status(200);
   


} catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal server error"})
}
}  
const SendDataTocompany= async(req,res)=>{
try {
   const{Email} =req.user
    const data= await AppliedCandidates.findOne({Email})
    if (!data) {
        return res.status(404).json({message:"No Application Till now"})
    }
    return res.status(200).json({ data });
} catch (error) {
    console.log(error)
    return res.status(500).json({message:"Internal server error"})
}
}

module.exports= {Applicationforwork,SendDataTocompany};