const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  img_name: String, 
  img: String,
  description: String
});
module.exports = mongoose.model('Gallery', schema);
