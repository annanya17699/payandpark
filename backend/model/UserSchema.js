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
    enum: ['Admin', 'User']
  },
  vehicleType : {
    type : String,
    required : false
  },
  vehicleNumber : {
    type : String,
    required : false,
    unique: true
  }
});
module.exports = mongoose.model('User', userSchema);