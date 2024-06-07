const { ProjectListByBusiness } = require("../models/Business/ProjectSchema");

const projectinfo= async (req,res)=>{
try {
    const {id}= req.params;
    const data= await ProjectListByBusiness.findById(id).populate("team");
    if (!data) {
        return res.status(404).json({message:"Project not found"});
    }
return res.status(200).json({data})

} catch (error) {
    console.log(error)
    return  res.status(500).json({mesaage:"Internal server error"})
}
}

module.exports= {projectinfo};