const nodemailer = require("nodemailer");
const { Freelancer } = require("../../models/freelancer/Freelancerreg");
const { Oracle } = require("../../models/oracle/oracle");
const cron = require('node-cron');
const { Business } = require("../../models/Business/Businessreg");

async function main(useremail, transporter) {
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: `${useremail}`,
    subject: "Mail for Oracle Team to verify user Details",
    html: ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify User Details</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .email-header {
                text-align: center;
                padding: 10px 0;
            }
            .email-content {
                padding: 20px;
                text-align: center;
            }
            .email-footer {
                text-align: center;
                padding: 20px;
                background-color: #f4f4f4;
                font-size: 12px;
                color: #777;
            }
            .button {
                background-color: #007BFF;
                color: white;
                padding: 15px 25px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                margin: 20px 0;
                border-radius: 5px;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">
                <h2>Verify User Details</h2>
            </div>
            <div class="email-content">
                <p>Dear Oracle Team,</p>
                <p>We have a new task for you. Please verify the user details as requested. Your verification will help us establish a connection point to facilitate growth.</p>
                <a href="https://www.google.com/" class="button">Verify User Details</a>
            </div>
        </div>
        <div class="email-footer">
            <p>Thank you for your cooperation.</p>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </body>
    </html>
    `,
  });

  console.log("Message sent: %s", info.messageId);
}
const OracleUserverificationmail = async (req, res) => {
  try {
    const users = await Freelancer.aggregate([
      { $match: { isVerified: false } },
      { $sample: { size: 5 } },
    ]);
    console.log("Users for email:", users);

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No more Un-verified user left" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    for (const user of users) {
      const useremail = user.Email;
      await main(useremail, transporter);
    }

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Internal server error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateOracleByFreelancerId = async (req, res) => {
  try {
    const oracle = await Oracle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!oracle) return res.status(404).json({ message: "Oracle not found" });
    res.status(200).json({ message: "Oracle updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOracleByFreelancerId = async (req, res) => {
  try {
    const oracle = await Oracle.findOne({ freeLancerId: req.params.id });
    if (!oracle) return res.status(404).json({ message: "Oracle not found" });
    res.status(200).json(oracle);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const sendUserDetailsToOracle = async (req, res) => {
  try {
    console.log("Running sendUserDetailsToOracle cron job");
    
    const freelancerData = await Freelancer.find({ workExperience: { $gte: 2 } },{ oracle: true });
    if (!freelancerData || freelancerData.length === 0) {
      return { status: "No data found for verification" };
    }

    const updatedFreelancers = await Promise.all(
      freelancerData.map(async (elem) => {
        const randomUsers = await Freelancer.aggregate([
          { $match: { isverified: false } },
          { $sample: { size: 5 } },
        ]);

        if (!randomUsers || randomUsers.length === 0) {
          return { id: elem._id, status: "No users found for verification" };
        }

        const randomUserIds = randomUsers.map((user) => user._id);
        await Freelancer.findByIdAndUpdate(
          { _id: elem._id },
          { $addToSet: { oracledata: { $each: randomUserIds } } }
        );

        return { id: elem._id, status: "Updated" };
      })
    );

    return;
  } catch (error) {
    console.log(error);
   return; 
  }
};

const sendUserProjectToOracle = async (req, res) => {
  try {
    console.log("Running sendUserProjectToOracle cron job");

    const users = await Freelancer.find({ $and: [{ workExperience: { $gte: 2 } }, { oracle: true }] });
    const userData = await Promise.all(
      users.map(async (elem) => {
        const randomProjects = await Project.aggregate([
          { $match: { isverified: false } },
          { $sample: { size: 5 } },
        ]);

        if (!randomProjects || randomProjects.length === 0) {
          return { id: elem._id, status: "No projects found for verification" };
        }

        const randomProjectIds = randomProjects.map((project) => project._id);
        await Freelancer.findByIdAndUpdate(
          { _id: elem._id },
          { $addToSet: { oracleProject: { $each: randomProjectIds } } }
        );

        return { id: elem._id, status: "Updated" };
      })
    );
return;

  } catch (error) {
    console.log(error);
    return;
  }
};

const sendBusinessProjectToOracle = async (req, res) => {
  try {
    console.log("Running sendUserProjectToOracle cron job");

    const users = await Freelancer.find({ $and: [{ workExperience: { $gte: 2 } }, { oracle: true }] });
    const userData = await Promise.all(
      users.map(async (elem) => {
        const randomProjects = await ProjectListByBusiness.aggregate([
          { $match: { isverified: false } },
          { $sample: { size: 5 } },
        ]);

        if (!randomProjects || randomProjects.length === 0) {
          return { id: elem._id, status: "No projects found for verification" };
        }

        const randomProjectIds = randomProjects.map((project) => project._id);
        await Freelancer.findByIdAndUpdate(
          { _id: elem._id },
          { $addToSet: { oracleProject: { $each: randomProjectIds } } }
        );

        return { id: elem._id, status: "Updated" };
      })
    );
return;

  } catch (error) {
    console.log(error);
    return;
  }
};
const sendBusinessDetailToOracle= async ()=>{
  try {
    console.log("Running sendUserDetailsToOracle cron job");
    
    const freelancerData = await Freelancer.find({ workExperience: { $gte: 2 } },{ oracle: true });
    if (!freelancerData || freelancerData.length === 0) {
      return { status: "No data found for verification" };
    }

    const updatedFreelancers = await Promise.all(
      freelancerData.map(async (elem) => {
        const randomUsers = await Business.aggregate([
          { $match: { isverified: false } },
          { $sample: { size: 5 } },
        ]);

        if (!randomUsers || randomUsers.length === 0) {
          return { id: elem._id, status: "No users found for verification" };
        }

        const randomUserIds = randomUsers.map((user) => user._id);
        await Freelancer.findByIdAndUpdate(
          { _id: elem._id },
          { $addToSet: { oracledata: { $each: randomUserIds } } }
        );

        return { id: elem._id, status: "Updated" };
      })
    );

    return;
  } catch (error) {
    console.log(error);
   return; 
  }
}


cron.schedule('0  0 */3 * **', () => {
  sendUserDetailsToOracle({}, { status: () => {} }); 
});

cron.schedule('0  0 */3 * *', () => {
  sendUserProjectToOracle({}, { status: () => {} }); 
});
module.exports = {
  OracleUserverificationmail,
  updateOracleByFreelancerId,
  getOracleByFreelancerId,
  // sendUserDetailsToOracle,
  // sendUserProjectToOracle,
};
