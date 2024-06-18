const { Schema, model } = require("mongoose");

const freelancer_schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    Dob: {
      type: Schema.Types.Date,
    },
    professionalInfo: [
      {
        company: {
          type: String,
        },
        jobTitle: {
          type: String,
        },
        workDescription: {
          type: String,
        },
        workFrom: {
          type: String,
        },
        workTo: {
          type: String,
        },
        referencePersonName: {
          type: String,
        },
        referencePersonContact: {
          type: String,
        },
        githubRepoLink: {
          type: String,
        },
        oracle_assigned: {
          type: Schema.Types.ObjectId,
          ref: "freelancer_data",
        },
        verificationStatus: {
          type: String,
          default: "added", // e.g., "added", "verified", "rejected", "reapplied"
        },
        verificationUpdateTime: {
          type: Schema.Types.Date,
        },
        comments: {
          type: String,
        },
      },
    ],
    Skills: [
      {
        name: {
          type: String,
        },
        level: {
          type: String,
        },
        experience: {
          type: String,
        },
        interviewStatus: {
          type: String,
          default: "pending", // e.g., "pending", "accepted", "rejected", "reapplied"
        },
        interviewInfo: {
          type: Schema.Types.ObjectId,
          ref: "Interview",
        },
        interviewerRating: {
          type: Number, // out of 10
        },
      },
    ],
    Education: [
      {
        degree: {
          type: String,
        },
        universityName: {
          type: String,
        },
        fieldOfStudy: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
        grade: {
          type: String,
        },
        oracle_assigned: {
          type: Schema.Types.ObjectId,
          ref: "freelancer_data",
        },
        verificationStatus: {
          type: String,
          default: "added", // e.g., "added", "verified", "rejected", "reapplied"
        },
        verificationUpdateTime: {
          type: Schema.Types.Date,
        },
        comments: {
          type: String,
        },
      },
    ],
    Role: {
      type: String,
    },
    project: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
        index: true,
      },
    ],
    Refer: {
      name: {
        type: String,
      },
      contact: {
        type: String,
      },
    },
    githubLink: {
      type: String,
    },
    Linkdin: {
      type: String,
    },
    personalWebsite: {
      type: String,
    },
    perHourPrice: {
      type: Number,
    },
    connects: {
      type: Number,
      default: 100,
    },
    Resume: {
      type: Buffer,
    },
    workExperience: {
      type: Number,
    },
    isfreelancer: {
      type: Boolean,
      required: true,
      default: true,
    },
    oracle: {
      type: String, //notApplied, applied, approved,failed, stopped, reapplied
    },
    consultant: {
      status: {
        type: String, // e.g., "notApplied", "applied", "approved", "failed", "stopped", "reapplied"
        default: "notApplied",
      },
      domains: [
        {
          domain: { type: Schema.Types.ObjectId, ref: "Domain" },
          domainName: { type: String },
          experience: { type: Number },
          description: { type: String },
          status: { type: String }, //applied, verified, reapplied, rejected,
        },
      ],
    },
    otp: {
      type: String,
    },
    otpverified: {
      type: Boolean,
      default: false,
    },
    pendingProject: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProjectListByCompany",
      },
    ],
    rejectedProject: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProjectListByCompany",
      },
    ],
    acceptedProject: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProjectListByCompany",
      },
    ],
    oracleProject: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    userDataForVerification: [
      {
        type: Schema.Types.ObjectId,
        ref: "Verification",
      },
    ],
    interviewsAligned: [
      {
        type: Schema.Types.ObjectId,
        ref: "Verification",
      },
    ],
  },
  { timestamps: true }
);

const Freelancer = model("freelancer_data", freelancer_schema);
module.exports = { Freelancer };
