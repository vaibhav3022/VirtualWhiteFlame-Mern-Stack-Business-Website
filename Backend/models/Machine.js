const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  machines_name: String, working_img: String, machines_dec: String
});
module.exports = mongoose.model('Machine', schema);
