const express = require("express");
const User = require("../../model/UserSchema");
const OTP = require("../../model/OTPSchema");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchUser = require("../../middleware/fetchUser");
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

router.post(
    "/createuser",
    [
      body("name", "Enter a valid name").isLength({ min: 3 }),
      body("email", "Enter a valid email").isEmail(),
      body("password", "Password must be atleast 5 characters").isLength({
        min: 5,
      }),
      body("otp", "Valid OTP required").isLength({min: 6, max: 6})
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success:false,errors: errors.array() });
      }
      try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res
            .status(400)
            .json({success:false, error: "User already exists with this email" });
        }
        const otpResp = await OTP.find({ email: req.body.email }).sort({ createdAt: -1 }).limit(1);
        if (otpResp.length === 0 || req.body.otp !== otpResp[0].otp) {
            return res.status(400).json({
                success: false,
                message: 'The OTP is not valid',
            });
        }
        let salt = await bcrypt.genSalt(10);
        let secpass = await bcrypt.hash(req.body.password, salt);
        let userNew;
        User.create({
          name: req.body.name,
          email: req.body.email,
          password: secpass,
          vehicleNumber: req.body.vehicleNumber,
          role: req.body.role,
          vehicleType: req.body.vehicleType
        }).then(result => {
          userNew = result;
          const payload = {
            user: {
            id: userNew.id,
            },
        };
          const AUTH_TOKEN = jwt.sign(payload, SECRET_KEY);
          res.json({success:true, AUTH_TOKEN });
        }).catch(err =>{
          res.status(500).json({success:false, error: err });
        });
      } catch (error) {
        res.status(500).json({success:false, error: error });
      }
    }
  );
  
  router.post(
    "/login", [
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be atleast 5 characters").isLength({
          min: 5,
        }),
      ],
      async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success:false, errors: errors.array() });
        }
  
        const {email, password} = req.body;
        try{
            let user = await User.findOne({ email });
            if(!user){
                res.status(400).error({success:false, error : "Please input correct credentials"});
            }
            bcrypt.compare(password , user.password).then(function(result) {
                if(!result){
                    res.status(400).json({success:false, error : "Please input correct credentials"});
                }else{
                    const payload = {
                        user: {
                        id: user.id,
                        },
                    };
                    const AUTH_TOKEN = jwt.sign(payload, SECRET_KEY);
                    res.json({success:true,AUTH_TOKEN})
                }
            }).catch(err => res.status(500).json({ success:false, error: "Server error 500" }));
        }catch(error){
            res.status(500).json({success:false, error: "Server error 500" });
        }
    }
  );
  
  
  router.post(
      "/getuser", fetchUser, 
      async (req,res)=>{
          try {
              let userId = req.user.id;
              const user = await User.findById(userId).select("-password")
              res.send(user)
          } catch (error) {
              res.status(500).json({ error: "Server error 500" });
          }
      }
  );

  router.post(
    "/updateuser", fetchUser, 
    async (req,res)=>{
        try {
            let userId = req.user.id;
            const user = await User.findById(userId).select("-password")
            if(user){
              const updateUser = await User.findByIdAndUpdate(
                userId, 
                {
                  vehicleNumber: req.body.vehicleNumber,
                  vehicleType: req.body.vehicleType
                },
                {
                  new: true
                }
              )
              res.send(updateUser)
            }else{
              res.status(401).json({ error: "Unauthorised" });
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
);
  
  module.exports = router;