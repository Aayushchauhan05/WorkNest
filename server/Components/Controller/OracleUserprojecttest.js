const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const nodemailer = require('nodemailer');
const { Freelancer } = require('../models/Userschema'); 

const OracleUserverificationmail = async (req, res) => {
  try {
    const filePath = path.join(__dirname, '..', 'Utils', 'Oraclemail.html');
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {}; // Add necessary replacements if any
    const Htmltosend = template(replacements);

    const users = await Freelancer.aggregate([
      { $match: { isverified: false } },
      { $sample: { size: 3 } },
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
      await main(useremail, transporter, Htmltosend);
    }

    return res.status(200).json({ message: "Emails sent successfully" });

  } catch (error) {
    console.error("Internal server error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = OracleUserverificationmail;