const jwt= require("jsonwebtoken")
require("dotenv").config()
const { check, validationResult } = require('express-validator');
const Authmiddle= async (req,res,next)=>{
try {
    const checktoken= req.header("Authorization");
    console.log("token",checktoken)
    const token= checktoken.replace("Bearer","").trim()
   
    if(!checktoken) return res.status(401).json({message:"Un-Authorised User"})
 const verifytoken= jwt.verify(token,process.env.SECRET_KEY)
if (!verifytoken) {
    return res.status(401).json({message:"Invalid token"})
}
console.log(verifytoken);
req.user= verifytoken.userexist;
next()
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal server error"})
}
};

const loginValidator = [
    check('Email')
        .isEmail()
        .withMessage('Please provide a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
const signupValidator = [
    check('firstName')
        .notEmpty()
        .withMessage('Name is required'),
    check('Email')
        .isEmail()
        .withMessage('Please provide a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    check('phone')
        .isMobilePhone()
        .withMessage('Please provide a valid phone number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
module.exports={Authmiddle,loginValidator,signupValidator};