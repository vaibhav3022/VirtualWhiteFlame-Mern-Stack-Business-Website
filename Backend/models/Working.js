const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  working_name: String, 
  working_img: String,
  working_desc: String
});
module.exports = mongoose.model('Working', schema);
