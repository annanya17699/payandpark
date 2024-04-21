const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password: {
    type: String,
    required: true
  },
  role : {
    type : String,
    required : true,
    enum: ['Admin', 'Owner', 'User']
  },
  vehicleType : {
    type : String,
    required : true
  },
  vehicleNumber : {
    type : String,
    required : true,
    unique: true
  }
});
module.exports = mongoose.model('User', userSchema);