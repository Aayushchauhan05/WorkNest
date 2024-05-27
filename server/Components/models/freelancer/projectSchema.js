
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
    },
    isVerified:{
        type: Boolean,
        default:false
    }
}, { timestamps: true });

const Project = model("Project", freelancer_project);
module.exports={Project}