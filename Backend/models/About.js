const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  about_img: String, about_heading: String, about_desc: String
});
module.exports = mongoose.model('About', schema);
