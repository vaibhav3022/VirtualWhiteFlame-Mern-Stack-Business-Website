const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  heading: String, desc: String, view: String, img: String
});
module.exports = mongoose.model('Service', schema);
