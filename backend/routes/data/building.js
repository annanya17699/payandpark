const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Building= require("../../model/BuildingSchema");
const fs = require('fs')
const path = require('node:path');
const multer = require('multer');
require('dotenv').config();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.IMAGE_STORAGE_PATH)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname)
    }
});
 
const upload = multer({ storage: storage });

router.post(
  "/createBuilding",
  upload.single('blueprint'),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const buildingNew = await Building.create({
        name : req.body.name,
        blueprint : {
          data: fs.readFileSync(path.join(process.env.IMAGE_STORAGE_PATH + req.file.filename)),
          contentType: req.file.mimetype
        }
      })
      res.status(201).json({
        success: true,
        message: 'Building Details saved successfully',
        buildingNew
      });
    } catch (error) {
      res.status(500).json({ error: "Server error 500" });
    }
  }
);

router.get(
  "/buildings",
  async (req, res) => {
    try {
      Building.find({}).then((data, err)=>{
        if(err){
          res.status(404).json({error:err})
        }
        res.status(200).json({items: data});
    })
    } catch (error) {
      res.status(500).json({ error: "Server error 500" });
    }
  }
);
  
module.exports = router;