const express = require('express');
const otpGenerator = require('otp-generator');
const OTP = require('../../model/OTPSchema');
const User = require('../../model/UserSchema');

const router = express.Router();
router.post('/send-otp', 
async (req, res) => {
    console.log(req.body);
    try {
      const email = req.body.email;
      const checkUserPresent = await User.findOne({ email });
      if (checkUserPresent) {
        return res.status(401).json({
          success: false,
          message: 'User is already registered',
        });
      }
      let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      let result = await OTP.findOne({ otp: otp });
      while (result) {
        otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
        });
        result = await OTP.findOne({ otp: otp });
      }
      const otpPayload = { email, otp };
      const otpBody = await OTP.create(otpPayload);
      res.status(200).json({
        success: true,
        message: 'OTP sent successfully',
        otp,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  }
);
module.exports = router;