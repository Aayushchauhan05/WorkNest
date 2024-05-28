const { Schema, model } = require("mongoose")
const otpSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    otp: {
        required: true,
        type: String
    }
});


const otp = model("user_otp", otpSchema);
module.exports={otp}
