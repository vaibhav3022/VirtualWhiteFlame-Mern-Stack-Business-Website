const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  client_logo: String, client_desc: String, client_name: String, client_add: String, client_img: String
});
module.exports = mongoose.model('Client', schema);
