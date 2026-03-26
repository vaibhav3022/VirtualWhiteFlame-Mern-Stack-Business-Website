const About = require('../models/About');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('about/home.ejs');
exports.getAdd = (req, res) => res.render('about/add_about.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_about_img = Date.now() + req.files.about_img.name;
    req.files.about_img.mv('public/' + filename_about_img);

    await About.create({
      about_heading: d.about_heading,
      about_desc: d.about_desc,
      about_img: filename_about_img,
    });
    res.redirect('/list_about');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await About.find().lean());
  res.render('about/about_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await About.findByIdAndDelete(req.params.id);
  res.redirect('/list_about');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await About.findById(req.params.id).lean());
  res.render('about/about_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.about_heading = d.about_heading;
    updateData.about_desc = d.about_desc;
    if (req.files && req.files.about_img) {
      let filename_about_img = Date.now() + req.files.about_img.name;
      req.files.about_img.mv('public/' + filename_about_img);
      updateData.about_img = filename_about_img;
    }

    await About.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_about');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await About.find().lean());
  res.json({ da: result }); 
};
