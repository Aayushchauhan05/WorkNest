const { Schema, model } = require("mongoose");
const freelancer_schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    Dob: {
        type: String,
        required: true
    },
    professionalInfo: {
        type: Schema.Types.Mixed,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
    Education: {
        type: Schema.Types.Mixed,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    project: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }],
    Refer: {
        type: String,
        required: true
    },
    verified: {
        type: Schema.Types.Mixed
    },
    isVerified: {
        type: Boolean,
        default:false
    },
    githubLink: {
        type: String
    },
    Linkdin: {
        type: String
    },
    personalWebsite: {
        type: String
    },
    perHourPrice: {
        type: Number,
        required: true
    },
    connects: {
        type: Number,
        default: 0
    },
    Resume: {
        type: Buffer
    },
    InterviewedBy: {
        type: String
    },
    workExperience: {
        type: String,
        required: true
    },
    isfreelancer: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true });
const Freelancer = model("freelancer_data", freelancer_schema);
module.exports={Freelancer}