const { Freelancer, Business } = require("../models/Userschema");

const freelancerprofile=async(req,res)=>{
const {Email,isfreelancer}= req.user;
try {
    const Data= isfreelancer? await Freelancer.findOne({Email}).populate("Project"):await Business.findOne({Email});
    if (!Data) {
        return res.status(404).json({message:"No Data Found"});
    }
    
return res.send(200).json({Data})
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal server error"})
}
}
module.exports={freelancerprofile}