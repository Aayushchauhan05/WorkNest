const { Freelancer} = require("../models/freelancer/Freelancerreg");
const{Business}= require("../models/Business/Businessreg")


const profile=async(req,res)=>{
const {Email,isfreelancer}= req.user;
try {
        let Data;
        console.log(isfreelancer);
        if (isfreelancer) {
            Data = await Freelancer.findOne({Email}).populate("project").populate("pendingProject").populate("rejectedProject").populate("acceptedProject");
        } else {
            Data = await Business.findOne({ Email });
        }
        console.log(Data)
    if (!Data) {
        return res.status(404).json({message:"No Data Found"});
    }
   
return res.status(200).json({Data})
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal server error"})
}
}
module.exports={profile}