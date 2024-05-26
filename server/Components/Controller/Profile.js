const { Freelancer, Business } = require("../models/Userschema");

const freelancerprofile=async(req,res)=>{
const {Email,isfreelancer}= req.user;
try {
    const userexist= isfreelancer? await Freelancer.findOne({Email}).populate("Project"):await Business.findOne({Email});
    if (!userexist) {
        
    }
    
} catch (error) {
    
}
}