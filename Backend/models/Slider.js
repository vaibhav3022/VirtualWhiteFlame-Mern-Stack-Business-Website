const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  slider_title: String, 
  img1: String, desc1: String,
  img2: String, desc2: String,
  img3: String, desc3: String
});
module.exports = mongoose.model('Slider', schema);
