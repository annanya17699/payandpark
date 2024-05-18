const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const buildingSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  blueprint : {
    data: Buffer,
    contentType: String
  }
});
module.exports = mongoose.model('Building', buildingSchema);