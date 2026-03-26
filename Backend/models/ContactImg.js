const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  contact_img: String,
  description: String
});
module.exports = mongoose.model('ContactImg', schema);
