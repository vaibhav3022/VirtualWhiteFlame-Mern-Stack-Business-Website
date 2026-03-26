const GalleryImg = require('../models/GalleryImg');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('gallery_img/home.ejs');
exports.getAdd = (req, res) => res.render('gallery_img/add_gallery_img.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_gallery_img = Date.now() + req.files.gallery_img.name;
    req.files.gallery_img.mv('public/' + filename_gallery_img);

    await GalleryImg.create({
      gallery_img: filename_gallery_img,
      description: d.description
    });
    res.redirect('/list_gallery_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await GalleryImg.find().lean());
  res.render('gallery_img/gallery_img_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await GalleryImg.findByIdAndDelete(req.params.id);
  res.redirect('/list_gallery_img');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await GalleryImg.findById(req.params.id).lean());
  res.render('gallery_img/gallery_img_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    
    if (req.files && req.files.gallery_img) {
      let filename_gallery_img = Date.now() + req.files.gallery_img.name;
      req.files.gallery_img.mv('public/' + filename_gallery_img);
      updateData.gallery_img = filename_gallery_img;
    }

    updateData.description = d.description;
    await GalleryImg.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_gallery_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await GalleryImg.find().lean());
  res.json({ da: result }); 
};
