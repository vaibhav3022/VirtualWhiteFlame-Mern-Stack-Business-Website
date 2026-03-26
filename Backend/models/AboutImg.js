const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  about_img: String,
  description: String
});
module.exports = mongoose.model('AboutImg', schema);
