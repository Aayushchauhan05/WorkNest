const{Schema,model}=require("mongoose");
const projectsDetailsToFreelancerSchema= new Schema({
    Email:{
        required:true,
        type:String
    },
    pendingProject:[{
        type:Schema.Types.ObjectId,
        ref:"ProjectListByCompany"
    }],
    rejectedProject:[{
        type:Schema.Types.ObjectId,
        ref:"ProjectListByCompany"
    }],
    acceptedProject:[{
        type:Schema.Types.ObjectId,
        ref:"ProjectListByCompany"
    }]
})


const projectsDetailsToFreelancer= new model ("projectsDetailsToFreelancer",projectsDetailsToFreelancerSchema);
module.exports={projectsDetailsToFreelancer};