const skillsdata = require("../models/Common/skills");

const addskills= async (req,res)=>{
    try {
        const{skills}=req.body;
        console.log(skills);
        if (!skills || skills.length==0) {
            const allSkill = await skillsdata.findOne();
            return res.status(200).json({ allSkill });
        }

        const allSkill = await skillsdata.findOne();
       
        if (!allSkill) {
         const data= await skillsdata.create({skills:skills}) ;
           return res.status(200).json({data})
        }
const data=await skillsdata.findOneAndUpdate({$addToSet:{skills:skills}})
return res.status(200).json({data})
    } catch (error) {
        console.log("error in skills",error)
        return res.status(500).json({message:"Internal server error"})
    }
};
 module.exports= addskills