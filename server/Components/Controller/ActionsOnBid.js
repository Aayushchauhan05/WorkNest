const { Business } = require("../models/Business/Businessreg");
const { ApplyForPosition } = require("../models/freelancer/Apply");

const ActionFromBusinessSide= async (req,res)=>{
try {
    const business= req.user;
    const {status,Email}= req.body;


    const verifyuser= await Business.findOne({Email:business.Email});
    if (!verifyuser) {
        return res.status(404).json({message:"No data found"});
    }

const application=await ApplyForPosition.findOne({Email})

   if (!applications) {
    return res.status(404).json({message:"Data not found"})
   }
   const applications= await ApplyForPosition.findOneAndUpdate({Email:Email},{status:status},{new:true});
   return res.status(200).json({message:"Success"})
} catch (error) {
    console.log(error)
    return res.status(500).json({message:"Internal server error"})
}
}
module.exports= ActionFromBusinessSide;