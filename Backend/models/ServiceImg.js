const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  service_img: String,
  description: String
});
module.exports = mongoose.model('ServiceImg', schema);
