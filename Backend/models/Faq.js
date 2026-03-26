const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  que: String, ans: String
});
module.exports = mongoose.model('Faq', schema);
