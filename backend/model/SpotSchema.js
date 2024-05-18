const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const spotSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  xcoordinate : {
    type : Number,
    required : true
  },
  ycoordinate : {
    type : Number,
    required : true
  },
  status : {
    type : String,
    required : true,
    enum : ["Available", "Filled","Reserved"]
  },
  building : { 
    type: Schema.Types.ObjectId, 
    ref: 'Building' 
  }
});
module.exports = mongoose.model('Spot', spotSchema);