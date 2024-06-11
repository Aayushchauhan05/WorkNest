const { Freelancer } = require("../models/freelancer/Freelancerreg");
const { Business } = require("../models/Business/Businessreg");
const { otp } = require("../models/Common/CommonSchema");

const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const otpGenerator = require("otp-generator");
async function main(useremail, otp, transporter) {
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: `${useremail}`,
    subject: "Otp",
    text: `Your otp-${otp} don't share it with other `,
  });

  console.log("Message sent: %s", info.messageId);
}

const Freelancer_reg = async (req, res) => {
  try {
    const data = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(data.Email)
    const isValidEmail = emailRegex.test(data.Email);

    if (!isValidEmail) {
      return res.status(401).json({ message: "Enter valid email" });
    }

    const userExists = await Freelancer.findOne({
      $or: [{ Email: data.Email }, { userName: data.userName }],
    });
    if (userExists) {
      return res.status(401).json({
        message:
          userExists.Email === data.Email
            ? "User already exists"
            : "Username already exists",
      });
    }
    const salt = 14;
    const password = data.password;
    console.log("here is the password", password);
    const hashpass = await bcrypt.hash(password, salt);
    const otpCode = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    const user = await Freelancer.create({
      ...data,
      password: hashpass,
      otp: otpCode,
    });
console.log(otpCode)
    await main(
      data.Email,
      otpCode,
      nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: { user: process.env.EMAIL, pass: process.env.APP_PASS },
      })
    ).catch(console.error);

    return res.status(200).json({ user });
  } catch (error) {
    console.log("registrationerror", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const otpverify = async (req, res) => {
  try {
    const { otp, Email } = req.body;
    console.log(otp)
    const userexist =
      (await Business.findOne({ Email })) ||await  Freelancer.findOne({ Email });
      console.log(userexist.otp)
    if (userexist && userexist.otp == otp) {
      console.log(userexist.otp)
    if(userexist.isfreelancer==true){
await Freelancer.findOneAndUpdate({Email},{isfreelancer:true,otpverified:true},{new:true});
return res.status(200).json({ message: "Registration successfull" });
    }
    else if(userexist.iscompany==true){
      await Business.findOneAndUpdate({Email},{isfreelancer:true,otpverified:true},{new:true});
return res.status(200).json({ message: "Registration successfull" });
    }
      return res.status(200).json({ message: "Registration successfull" });
    }
    return res.status(401).json({ message: "Invalid otp" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Something went  wrong use different Email Id" });
  }
};

const business_reg = async (req, res) => {
  const data= req.body;
  try {
    console.log(req.body);
    const userexist = await Business.findOne({ Email: data.Email });
    console.log("testing user existence", userexist);
    if (userexist) {
      return res.status(401).json({ message: "User already exist" });
    }
    const companyExist = await Business.findOne({companyName:data.companyName });
    if (companyExist) {
      return res.status(401).json({ message: "Company already exist" });
    }

    const hashpass = await bcrypt.hash(password, 14);
    const otpcode = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const user = await Business.create({
    ...data,
      password: hashpass,
      otp: otpcode,
    });


    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });
    await main(data.Email, otpcode, transporter).catch(console.error);
    return res.status(200).json({ message: "Registration Succesfull" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { Email, password } = req.body;
    let userexist = await Business.findOne({ Email }).select("-ProjectList");
// if (userexist?.otpverified==false) {
//   return res.status(401).json({message:"unauthorised user"})
// }
    if (!userexist) {
      userexist = await Freelancer.findOne({ Email }).select(
        "-Resume -Skills -Education -Role -project -Refer -verified -isVerified -githubLink -Linkdin -personalWebsite -perHourPrice -connects -Resume -InterviewedBy -workExperience "
      );
    }
    if (userexist.otpverified==false) {
      return res.status(401).json({message:"unauthorised user"})
    }
    if (!userexist) {
      return res
        .status(404)
        .json({ message: "User not exist, please register" });
    }
    console.log(password)
    const passcheck = await bcrypt.compare(password, userexist.password);
console.log(passcheck)
    if (!passcheck) {
      return res.status(401).json({ message: " Invalid password Or Username" });
    }
    const token = await jwt.sign({ userexist }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    console.log("token", token);
    // return res.status(200).json({userexist,token})
    return res.status(200).json({ userexist, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { Freelancer_reg, otpverify, business_reg, login };
