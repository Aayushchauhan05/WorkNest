const { Schema, model } = require("mongoose")
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
        type: Boolean,
        default: false
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
    },
    otp: {
        type: String
    },
    ProjectList: [{
        type: Schema.Types.ObjectId,
        ref: "ProjectListByCompany"
    }],
    Appliedcandidates: [{
        type: Schema.Types.ObjectId,
        ref: "Applicationforwork"
    }]

}, { timestamps: true });
const Business = model("Business_Data", businessSchema);
module.exports = { Business }