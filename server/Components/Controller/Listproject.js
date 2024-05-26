const { ProjectListByBusiness, Totalprojectlistedbybusiness } = require("../models/ProjectSchema");
const{Freelancer}=require("../models/Userschema")
const ListprojectBybusiness= async (req,res)=>{
    try {
        const {projectName,Description,CompanyName,Start,End,SkillsRequired,Role,projectType}=req.body;
const {Email}= req.user;
const project= await ProjectListByBusiness.create({projectName,Description,Email,CompanyName,Start,End,SkillsRequired,Role,projectType})

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
      const userexist=await  Freelancer.findById(id);
      if (!userexist) {
        return res.status(404).json({message:"User not exist"})
      }
    const New_project= await project.create({projectName,Description,verified,isVerified,githubLink,Start,End,Refer,TechUsed,Role,projectType});
    
    await Freelancer.findByIdAndUpdate({id},{$push:{project:Add_project._id}},{new:true});
    return res.status(200).json({New_project});
    
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
      };

module.exports={ListprojectBybusiness,getprojectdata,project_reg};