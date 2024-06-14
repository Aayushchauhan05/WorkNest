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
            Data = await Business.findOne({ Email }). populate({
                path: 'hirefreelancer.freelancer', 
                model: 'freelancer_data'
            });
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
const editProfile= async (req,res)=>{
    try {
        const data= req.body;
       const user= await Freelancer.findOne({Email:data.Email}) || await Business.findOne({Email:data.Email});
       if (!user) {
        return res.status(404).json({message:"User not found"});
       }
const userupdate= await Freelancer.findOneAndUpdate({Email:data.Email},data,{new:true}) || await Business.findOneAndUpdate({Email:data.Email},data,{new:true})
if (!userupdate) {
    return res.status(404).json({message:"error in update"});
}
return res.status(200).json({message:"profile updated successfully"})
    } catch (error) {
       console.log(error) 
       return res.status(500).json({message:"Internal server error"})
    }
}
module.exports={profile,editProfile}