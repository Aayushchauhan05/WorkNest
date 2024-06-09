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
    },
    password: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    Dob: {
      type: String,
      // required: true,
    },
    professionalInfo: {
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
    },
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
      },
    ],
    Role: {
      type: String,
      // required: true,
    },
    project: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
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
    verified: {
      type: Schema.Types.Mixed,
    },
    isVerified: {
      type: Boolean,
      default: false,
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
      // required: true,
    },
    connects: {
      type: Number,
      default: 100,
    },
    Resume: {
      type: Buffer,
    },
    InterviewedBy: {
      type: String,
    },
    workExperience: {
      type: String,
      // required: true,
    },
    isfreelancer: {
      type: Boolean,
      required: true,
      default: true,
    },
    oracle: {
      type: Boolean,
      default: false,
    },
    consultant: {
      type: Boolean,
      required: true,
      default: false,
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
    oracledata: [
      {
        type: Schema.Types.ObjectId,
        ref: "freelancer_data",
      },
    ],
  },
  { timestamps: true }
);

const Freelancer = model("freelancer_data", freelancer_schema);
module.exports = { Freelancer };
