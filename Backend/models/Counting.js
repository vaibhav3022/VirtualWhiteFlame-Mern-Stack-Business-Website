const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  counting_name: String, 
  counting_count: String,
  counting_desc: String
});
module.exports = mongoose.model('Counting', schema);
