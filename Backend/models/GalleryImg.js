const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  gallery_img: String,
  description: String
});
module.exports = mongoose.model('GalleryImg', schema);
