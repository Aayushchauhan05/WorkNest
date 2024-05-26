const {Schema,model}= require("mongoose");
 const ProjectSchemaByBusiness= new Schema({
    projectName:{
        type:String,
            required:true
    },
    Description:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    verified:{
        type:Schema.Types.Mixed
    },
    isVerified:{
        type:String
    },
        CompanyName:{
        type:String,
        required:true
    },
    Start:{
        type:Date
    },
    End:{
        type:Date
    },
    SkillsRequired:[{
        type:String,
        required:true
    }],
    Role:{
        type:String,
        required:true
    },
    projectType:{
        type:String,
        required:true
    }
    
 })
 const TotalprojectlistedbybusinessSchema= new Schema({
    Email:{
        required:true,
        type:String
    },
    CompanyName:{
        required:true,
        type:String
    },
    ProjectList:[{
type:Schema.Types.ObjectId,
ref:"ProjectListByCompany"
    }]

 });
const Totalprojectlistedbybusiness= new model("Projectlistbusinesswise",TotalprojectlistedbybusinessSchema);
 const ProjectListByBusiness= new model("ProjectListByCompany",ProjectSchemaByBusiness);
  module.exports={ProjectListByBusiness,Totalprojectlistedbybusiness};