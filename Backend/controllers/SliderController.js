const Slider = require('../models/Slider');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('slider/home.ejs');
exports.getAdd = (req, res) => res.render('slider/add_slider.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_img1 = Date.now() + req.files.img1.name;
    req.files.img1.mv('public/' + filename_img1);
    let filename_img2 = Date.now() + req.files.img2.name;
    req.files.img2.mv('public/' + filename_img2);
    let filename_img3 = Date.now() + req.files.img3.name;
    req.files.img3.mv('public/' + filename_img3);

    await Slider.create({
      slider_title: d.slider_title,
      img1: filename_img1, desc1: d.desc1,
      img2: filename_img2, desc2: d.desc2,
      img3: filename_img3, desc3: d.desc3,
    });
    res.redirect('/list_slider');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Slider.find().lean());
  res.render('slider/slider_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Slider.findByIdAndDelete(req.params.id);
  res.redirect('/list_slider');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Slider.findById(req.params.id).lean());
  res.render('slider/slider_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.slider_title = d.slider_title;
    if (req.files && req.files.img1) {
      let filename_img1 = Date.now() + req.files.img1.name;
      req.files.img1.mv('public/' + filename_img1);
      updateData.img1 = filename_img1;
    }
    if (req.files && req.files.img2) {
      let filename_img2 = Date.now() + req.files.img2.name;
      req.files.img2.mv('public/' + filename_img2);
      updateData.img2 = filename_img2;
    }
    if (req.files && req.files.img3) {
      let filename_img3 = Date.now() + req.files.img3.name;
      req.files.img3.mv('public/' + filename_img3);
      updateData.img3 = filename_img3;
    }
    updateData.desc1 = d.desc1;
    updateData.desc2 = d.desc2;
    updateData.desc3 = d.desc3;

    await Slider.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_slider');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Slider.find().lean());
  res.json({ da: result }); 
};
