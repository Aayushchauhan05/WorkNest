const { ProjectListByBusiness, Totalprojectlistedbybusiness } = require("../models/Business/ProjectSchema");
const{Freelancer}=require("../models/freelancer/Freelancerreg")
const{Project}= require("../models/freelancer/projectSchema")

const ListprojectBybusiness= async (req,res)=>{
    try {
        const {projectName,Description,CompanyName,Start,End,SkillsRequired,Role,projectType,TotalNeedOffreelancer}=req.body;
const {Email}= req.user;
const project= await ProjectListByBusiness.create({projectName,Description,Email,CompanyName,Start,End,SkillsRequired,Role,projectType,TotalNeedOffreelancer})

const{_id}=project;
const projectexist= await Totalprojectlistedbybusiness.findOne({Email})
console.log("projectid",_id);
if (!projectexist) {
    await Totalprojectlistedbybusiness.create({Email,CompanyName,ProjectList:_id});
}
else{
    await Totalprojectlistedbybusiness.findOneAndUpdate({Email},{$push:{ProjectList:_id}});
}
return res.status(200)
    } catch (error) {
       console.log(error);
       return res.status(500).json({message:"Internal server error"}) 
    }

}

const getprojectdata= async (req,res)=>{
try {
    const{Email}=req.user;
    const data= await Totalprojectlistedbybusiness.findOne({Email});
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
    const data= await ProjectListByBusiness.Find();
    return res.status(200).json({data})
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"})
}
};

module.exports={ListprojectBybusiness,getprojectdata,project_reg,dataForAllAndFilter};