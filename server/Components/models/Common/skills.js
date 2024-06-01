const {Schema,model}=require("mongoose")

const skillsSchema= new Schema ({
    skills:{
        type:[String]
    }
})

const skillsdata = new model ("skills",skillsSchema)
module.exports= skillsdata;