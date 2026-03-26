const AboutImg = require('../models/AboutImg');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('about_image/home.ejs');
exports.getAdd = (req, res) => res.render('about_image/add_about_img.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_about_img = Date.now() + req.files.about_img.name;
    req.files.about_img.mv('public/' + filename_about_img);

    await AboutImg.create({
      about_img: filename_about_img,
      description: d.description
    });
    res.redirect('/list_about_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await AboutImg.find().lean());
  res.render('about_image/about_img_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await AboutImg.findByIdAndDelete(req.params.id);
  res.redirect('/list_about_img');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await AboutImg.findById(req.params.id).lean());
  res.render('about_image/about_img_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    
    if (req.files && req.files.about_img) {
      let filename_about_img = Date.now() + req.files.about_img.name;
      req.files.about_img.mv('public/' + filename_about_img);
      updateData.about_img = filename_about_img;
    }

    updateData.description = d.description;
    await AboutImg.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_about_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await AboutImg.find().lean());
  res.json({ da: result }); 
};
