const { Business } = require("../models/Business/Businessreg");
const{AppliedCandidates,ApplyForPosition}=require("../models/freelancer/Apply")
const Applicationforwork= async (req,res)=>{
try {
    const {Name,Email,phoneNumber,address,desiredSalary,experience,role,companyemail,companyName,status,projectId}=req.body;

const companyExist= await Business.findOne({email:companyemail});

if (!companyExist) {
    return res.status(404).json({message:"Company not exist"});

}
const Application= await ApplyForPosition.create({Name,Email,phoneNumber,address,desiredSalary,experience,role,companyemail,status,projectId})
const {_id}=Application;
console.log(_id);
const prevcandidates= await AppliedCandidates.find({Email:companyemail});
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