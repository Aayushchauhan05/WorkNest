const{Schema,model}= require("mongoose");
const WorkhistorySchema= new Schema ({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
})
const educationSchema= new Schema({
    degree: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    yearOfGraduation: {
        type: String,
        required: true
    }
});

const experienceSchema= new Schema({
    education:[educationSchema],
    Workhistory:[WorkhistorySchema]

});
const applyforpositionSchema =  new Schema ({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    desiredSalary:{
        type:String,
        required:true
    },
    experience:{
            type:experienceSchema,
            required:true  
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    },
    projectId:{
type:Schema.Types.ObjectId,
ref:"ProjectListByCompany",
required:true
    }
   
});

const ApplyForPosition = new model("Applicationforwork",applyforpositionSchema);
 module.exports={ApplyForPosition}


