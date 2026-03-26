const Service = require('../models/Service');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('service/home.ejs');
exports.getAdd = (req, res) => res.render('service/add_service.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_img = Date.now() + req.files.img.name;
    req.files.img.mv('public/' + filename_img);

    await Service.create({
      heading: d.heading,
      desc: d.desc,
      view: d.view,
      img: filename_img,
    });
    res.redirect('/list_service');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Service.find().lean());
  res.render('service/list_Service.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.redirect('/list_service');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Service.findById(req.params.id).lean());
  res.render('service/update_Service.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.heading = d.heading;
    updateData.desc = d.desc;
    updateData.view = d.view;
    if (req.files && req.files.img) {
      let filename_img = Date.now() + req.files.img.name;
      req.files.img.mv('public/' + filename_img);
      updateData.img = filename_img;
    }

    await Service.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_service');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Service.find().lean());
  res.json({ da: result }); 
};
