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
        type: Boolean
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

const freelancer_project = new Schema({
    projectName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    verified: {
        type: Schema.Types.Mixed
    },
    isVerified: {
        type: Boolean
    },
    githubLink: {
        type: String,
        required: true
    },
    Start: {
        type: Date
    },
    End: {
        type: Date
    },
    Refer: {
        type: String,
        required: true
    },
    TechUsed: [{
        type: String,
        required: true
    }],
    Role: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    }
}, { timestamps: true });

const otpSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    otp: {
        required: true,
        type: String
    }
});

const businessSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companySize: {
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
    Position: {
        type: String,
        required: true
    },
    Refer: {
        type: String,
        required: true
    },
    verified: {
        type: Schema.Types.Mixed
    },
    isVerified: {
        type: Boolean
    },
    Linkdin: {
        type: String
    },
    personalWebsite: {
        type: String
    },
    isBusiness: {
        type: Boolean,
        required: true,
        default: true
    },
    connects: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const otp = model("user_otp", otpSchema);
const Freelancer = model("freelancer_data", freelancer_schema);
const Project = model("Project", freelancer_project);
const Business = model("Business_Data", businessSchema);

module.exports = { Freelancer, Project, otp, Business };
