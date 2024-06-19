
const { Schema, model } = require("mongoose");
const ProjectSchemaByBusiness = new Schema({
    projectName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    verified: {
        type: Schema.Types.Mixed
    },
    isVerified: {
        type: String
    },
    CompanyName: {
        type: String,
        required: true
    },
    Start: {
        type: Date
    },
    End: {
        type: Date
    },
    SkillsRequired: [{
        type: String,
        required: true
    }],
    experience: {
        type: String
    },
    Role: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    TotalNeedOffreelancer: [{
       
        category: {
            type: String
        },

        needOfFreelancer: {
            type: Number,
        },
        appliedCandidates: [{
            type: Schema.Types.ObjectId,
            ref: 'applicationforwork'
        }],
        rejected: [{
            type: Schema.Types.ObjectId,
            ref: 'applicationforwork'
        }],
        accepted: [{
            type: Schema.Types.ObjectId,
            ref: 'applicationforwork'
        }],
        status:{
            type: String,
            default: "Pending" // pending,not hiring
        }
    }],
    status: {
        type: String,
        default: "Pending" // pending,not hiring
    },
    team: [{
        type: Schema.Types.ObjectId,
        ref: "freelancer_data"
    }]
})


const ProjectListByBusiness = new model("ProjectListByCompany", ProjectSchemaByBusiness);
module.exports = { ProjectListByBusiness };