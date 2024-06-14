const { Business } = require("../models/Business/Businessreg");
const { ProjectListByBusiness, Totalprojectlistedbybusiness } = require("../models/Business/ProjectSchema");
const{Freelancer}=require("../models/freelancer/Freelancerreg")
const{Project}= require("../models/freelancer/projectSchema")
const ListprojectBybusiness = async (req, res) => {
  try {
      const frontenddata = req.body;
      console.log("Frontend data received:", frontenddata);
      
      const { Email } = req.user;
      console.log("User email:", Email);

      const project = await ProjectListByBusiness.create({...frontenddata,Email:Email});
      const { _id } = project;
      console.log("Project ID:", _id);

      const projectUpdate = await Business.findOneAndUpdate(
          { Email },
          { $push: { ProjectList: _id } },
          { new: true } 
      );

      console.log("Updated business document:", projectUpdate);

   
      return res.status(200).send(projectUpdate);
  } catch (error) {
      console.error("Error in ListprojectBybusiness:", error);
      return res.status(500).json({ message: "Internal server error" });
  }
};

const getprojectdata= async (req,res)=>{
try {
    const{Email}=req.user;
    const data = await Business.findOne({ Email })
    .populate('ProjectList')
    
  
    if (!data) {
        return res.status(404).json({message:"No data found"})
    }
return res.status(200).json({data});
} catch (error) {
    console.log(error);
       return res.status(500).json({message:"Internal server error"})
}
}

const project_reg= async (req,res)=>{
    try {
      const {projectName,Description,verified,isVerified,githubLink,Start,End,Refer,TechUsed,Role,projectType}=req.body;
      const id= req.user._id;
      console.log(id)
      const userexist=await Freelancer.findById(id);
      if (!userexist) {
        return res.status(404).json({message:"User not exist"})
      }
    const New_project= await Project.create({projectName,Description,verified,isVerified,githubLink,Start,End,Refer,TechUsed,Role,projectType});
    const {_id}=New_project
    // console.log(._id);
   const project= await Freelancer.findByIdAndUpdate(id,{$push:{project:_id}},{new:true});
   console.log("project",project)
    return res.status(200).json({New_project});
    
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
      };
  const dataForAllAndFilter= async(req,res)=>{
try {
    console.log(ProjectListByBusiness)
    const data= await ProjectListByBusiness.find();
    return res.status(200).json({data})
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"})
}
};

// const displayProjectDetails= async ()=>{
//   const id= req.params;
//   const data= await ProjectListByBusiness.findById(id)
// }
module.exports={ListprojectBybusiness,getprojectdata,project_reg,dataForAllAndFilter};