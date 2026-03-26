const Gallery = require('../models/Gallery');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('gallery/home.ejs');
exports.getAdd = (req, res) => res.render('gallery/add_gallery.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_img = Date.now() + req.files.img.name;
    req.files.img.mv('public/' + filename_img);

    await Gallery.create({
      img_name: d.img_name,
      img: filename_img,
      description: d.description
    });
    res.redirect('/list_gallery');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Gallery.find().lean());
  res.render('gallery/gallery_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.redirect('/list_gallery');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Gallery.findById(req.params.id).lean());
  res.render('gallery/gallery_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.img_name = d.img_name;
    if (req.files && req.files.img) {
      let filename_img = Date.now() + req.files.img.name;
      req.files.img.mv('public/' + filename_img);
      updateData.img = filename_img;
    }

    updateData.description = d.description;
    await Gallery.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_gallery');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Gallery.find().lean());
  res.json({ da: result }); 
};
