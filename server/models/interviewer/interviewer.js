const mongoose = require('mongoose');

const interviewerSchema = new mongoose.Schema({
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "freelancer_data",
        required: true
    },
    experienceYears: {
        type: Number,
        required: true,
        min: 5
    },
    skill: {
        type: String,
        required: true
    },
    skillId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills",
        required: true
    },
    status: {
        type: String,
        enum: ['Not Applied', 'Applied', 'Stopped', 'Approved'],
        default: 'Not Applied'
    }
}, { timestamps: true });

const Interviewer = mongoose.model('Interviewer', interviewerSchema);

module.exports = { Interviewer };
