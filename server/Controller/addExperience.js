const { Freelancer } = require("../models/freelancer/Freelancerreg");
const { ObjectId } = require('bson');

const addExperienceFreelancer= async (req,res)=>{
    try {
        const objectId = new ObjectId();
        const {Email}= req.user;
        const data= req.body;
        
        const UpdateUser= await Freelancer.findOneAndUpdate({Email},{
            $addToSet:{professionalInfo:{_id: objectId,...data}},isVerified:false
        },{new :true})
        return res.status(200).json({message:"Experince Added"})
    } catch (error) {
    console.log(error)
    return  res.status(500).json({message:"Internal server error"})  
    }
    }
const deleteExperienceFreelancer= async (req,res)=>{
    try {
        const {id}= req.params;
        const {Email}=req.user;
        const updatedUser = await Freelancer.findOneAndUpdate(
            { Email },
            { $pull: { professionalInfo: { _id: ObjectId(id) } } },
            { new: true }
        );
return res.status(200).json({message:"Sucessfull"})
    } catch (error) {
        console.log(error)
        return  res.status(500).json({message:"Internal server error"})  
    }
}

    module.exports={addExperienceFreelancer,deleteExperienceFreelancer}