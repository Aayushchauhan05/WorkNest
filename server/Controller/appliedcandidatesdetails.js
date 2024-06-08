const { ApplyForPosition } = require("../models/freelancer/Apply");
const appliedFreelancerDetails= async (req,res)=>{
try{
const {id}= req.params;
const data= await ApplyForPosition.find({$and:[{projectId:id},{status:{$eq:"Pending"}}]})
if(!data){
return res.status(404).json({message:"no data found"})
}
return  res.status(200).json({data})
}
catch(error){
    console.log(error)
return res.status(500).json({message:"Internal server error"})
}
}

module.exports={appliedFreelancerDetails}