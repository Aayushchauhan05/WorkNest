const {Freelancer} = require("../models/freelancer/Freelancerreg");
const {Business}= require("../models/Business/Businessreg");
const {otp}= require("../models/Common/CommonSchema")

const nodemailer = require("nodemailer");
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
require("dotenv").config()
const otpGenerator = require('otp-generator')
async function main(useremail,otp,transporter) {
  
  const info = await transporter.sendMail({
    from: process.env.EMAIL, 
    to: `${useremail}`, 
    subject: "Otp", 
    text: `Your otp-${otp} don't share it with other `, 
   
  });

  console.log("Message sent: %s", info.messageId);
 
}


 const Freelancer_reg= async  (req,res)=>{
const {firstName,lastName,userName,Email,phone,Dob,professionalInfo,Skills,Education,Role, project,Refer,verified,isVerified,githubLink,Linkdin,personalWebsite,perHourPrice,connects,Resume,InterviewedBy,workExperience,password}=req.body;
    try {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

       
          const isValidEmail=emailRegex.test(Email);
      
        console.log("email",isValidEmail)
        if(!isValidEmail){
            return res.status(401).json({message:"Enter valid email"});
        }
        
        const userexist= await Freelancer.findOne({Email});
        const  Usernameexist= await Freelancer.findOne({userName});
     if (userexist) {
        return res.status(404).json({message:"User already exist"});
     }
     if (Usernameexist) {
        return res.status(404).json({message:"Username already exist"});
     }
const hashpass= await bcrypt.hash(password,14);
console.log(hashpass)
    const user= await  Freelancer.create({firstName,lastName,userName,Email,phone,Dob,professionalInfo,Skills,Education,Role, project,Refer,verified,isVerified,githubLink,Linkdin,personalWebsite,perHourPrice,connects,Resume,InterviewedBy,workExperience,password:hashpass})
    await user.save();
    console.log("user",user.password)
   const otpcode= otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
    const otpexist=  await otp.findOne({Email});
   
if (!otpexist) {
    const userotp= await  otp.create({email:Email,phone,otp:otpcode})
     
}
else{
const update= await otp.findOneAndUpdate({email:Email},{otp:otpcode},{new:true});
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
await main(Email,otpcode,transporter).catch(console.error); 
        return res.status(200).json({user})
    } catch (error) {
        console.log('registrationerror',error);
         return res.status(500).json({message:"Internal server error"})
    }

 };
  const otpgen= async(req,res)=>{
try {
  const{otp,Email}=req.body;
  const userexist= await otp.findOne({Email});
  if (userexist && userexist.otp==otp) {
    return res.status(200).json({message:"login successfull"})
  }
return res.status(401).json({message:"Invalid otp"})

} catch (error) {
    console.log(error);
    return res.status(200).json({message:"Something went wrong"})
}
  };
 

  const business_reg=async (req,res)=>{
const {firstName,lastName,companyName,companySize,Email,phone,Dob,professionalInfo,Position,Refer,verified,isVerified,Linkdin,personalWebsite,connects,password}=req.body;
try {

  const userexist= await Business.findOne({Email});
  if (userexist) {
    return res.status(401).json({message:"User already exist"})
  }
  if (userexist.companyName==companyName) {
    return res.status(401).json({message:"Company already exist"})
  }
 const user= Business.create({firstName,lastName,companyName,companySize,Email,phone,Dob,professionalInfo,Position,Refer,verified,isVerified,Linkdin,personalWebsite,connects,password});
 const otpcode= otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
    const otpexist=  await otp.FindOne({Email});
  
if (!otpexist) {
    const userotp= await otp.create({email:Email,phone,otp:otpcode})
     
}
else{
const update= await otp.findOneAndUpdate({email:Email},{otp:otpcode},{new:true});
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
await main(Email,otpgen,transporter).catch(console.error); 
return res.status(200).json({message:"Registration Succesfull"});
} catch (error) {
  console.log(error)
  return res.status(500).json({message:"Internal server error"})
}
  };
  const login= async(req,res)=>{
try {
  const{Email,password}= req.body;
 
    
    let userexist = await Business.findOne({Email });
    if (!userexist) {
      userexist = await Freelancer.findOne({ Email }).select("-Resume -Skills -Education -Role -project -Refer -verified -isVerified -githubLink -Linkdin -personalWebsite -perHourPrice -connects -Resume -InterviewedBy -workExperience ");
console.log("test", userexist);

      console.log("test",userexist)
    }
    
    if (!userexist) {
      return res.status(404).json({ message: "User not exist, please register" });
    }
    console.log("user",userexist)
    const userpass= userexist.password
    console.log(userpass)
  const passcheck= await bcrypt.compare(password,userpass);
  if (!passcheck) {
    return res.status(401).json({message:" Invalid password Or Username"})
  }
  const token= await jwt.sign({userexist},process.env.SECRET_KEY,{expiresIn:"2d"});
  console.log("token",token)
// return res.status(200).json({userexist,token})  
return res.cookie("token", token, { httpOnly: true, sameSite: 'none', secure: true }).status(200).json({userexist})
} catch (error) {
  console.log(error);
  return  res.status(500).json({message:"Internal server error"})
}
  }

 module.exports={Freelancer_reg,otpgen,business_reg,login}