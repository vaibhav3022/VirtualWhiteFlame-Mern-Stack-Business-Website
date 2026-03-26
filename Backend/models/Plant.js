const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  plants_name: String, 
  plants_add: String, 
  plants_mobile: String, 
  plants_email: String, 
  plants_img: String,
  plants_desc: String
});
module.exports = mongoose.model('Plant', schema);
