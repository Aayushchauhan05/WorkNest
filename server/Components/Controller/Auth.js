const {Freelancer,otp, project, Business} = require("../models/Userschema");
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
        
        const userexist= await Freelancer.find({Email});
        const  Usernameexist= await Freelancer.find({userName});
     if (userexist) {
        return res.status(404).json({message:"User already exist"});
     }
     if (Usernameexist) {
        return res.status(404).json({message:"Username already exist"});
     }
const hashpass= bcrypt.hash(password,process.env.SALT)
    const user= await  Freelancer.create({firstName,lastName,userName,Email,phone,Dob,professionalInfo,Skills,Education,Role, project,Refer,verified,isVerified,githubLink,Linkdin,personalWebsite,perHourPrice,connects,Resume,InterviewedBy,workExperience,password:hashpass})
   const otpcode= otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCase:false });
    const otpexist=  await otp.Find({Email});
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
if (!otpexist) {
    const userotp= await  otp.create({Email,phone,otpcode})
     
}
else{
const update= await otp.findOneAndUpdate({Email},{otp:otpcode},{new:true});
}
        return res.status(200).json({user})
    } catch (error) {
        console.log(error);
         return res.status(500).json({message:"Internal server error"})
    }

 };
  const otpgen= async(req,res)=>{
try {
  const{otp,Email}=req.body;
  const userexist= await otp.find({Email});
  if (userexist && userexist.otp==otp) {
    return res.status(200).json({message:"login successfull"})
  }
return res.status(401).json({message:"Invalid otp"})

} catch (error) {
    console.log(error);
    return res.status(200).json({message:"Something went wrong"})
}
  };
  const project_reg= async (req,res)=>{
try {
  const {projectName,Description,verified,isVerified,githubLink,Start,End,Refer,TechUsed,Role,projectType}=req.body;
  const id= req.user._id;
  const userexist=await  Freelancer.findById(id);
  if (!userexist) {
    return res.status(404).json({message:"User not exist"})
  }
const New_project= await project.create({projectName,Description,verified,isVerified,githubLink,Start,End,Refer,TechUsed,Role,projectType});

await Freelancer.findByIdAndUpdate({id},{$push:{project:Add_project._id}},{new:true});
return res.status(200).json({New_project});

  
} catch (error) {
  console.log(error);
  return res.status(500).json({message:"Internal server error"})
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
    const otpexist=  await otp.Find({Email});
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
if (!otpexist) {
    const userotp= await otp.create({Email,phone,otpcode})
     
}
else{
const update= await otp.findOneAndUpdate({Email},{otp:otpcode},{new:true});
}

return res.status(200).json({user});
} catch (error) {
  console.log(error)
  return res.status(500).json({message:"Internal server error"})
}
  };
  const login= async(req,res)=>{
try {
  const{email,password}= req.body;
  const userexist= await  Business.find({email})|| await Freelancer.find({email});
  if (!userexist) {
    return res.status(404).json({message:"User not exist please login"})}
    const userpass= userexist.password
  const passcheck= await bcrypt.compare(userpass,password);
  if (!passcheck) {
    return res.status(401).json({message:" Invalid password Or Username"})
  }
  const token= jwt.sign({userexist},process.env.SECRET_KEY,{expiresIn:"2d"});
  console.log("token",token)
return res.status(200).json({userexist,token})  
} catch (error) {
  console.log(error);
  return  res.status(500).json({message:"Internal server error"})
}
  }

 module.exports={Freelancer_reg,otpgen,business_reg,login}