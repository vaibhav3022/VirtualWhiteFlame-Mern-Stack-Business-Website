const ServiceImg = require('../models/ServiceImg');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('service_img/home.ejs');
exports.getAdd = (req, res) => res.render('service_img/add_service_img.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_service_img = Date.now() + req.files.service_img.name;
    req.files.service_img.mv('public/' + filename_service_img);

    await ServiceImg.create({
      service_img: filename_service_img,
      description: d.description
    });
    res.redirect('/list_service_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await ServiceImg.find().lean());
  res.render('service_img/service_img_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await ServiceImg.findByIdAndDelete(req.params.id);
  res.redirect('/list_service_img');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await ServiceImg.findById(req.params.id).lean());
  res.render('service_img/service_img_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    
    if (req.files && req.files.service_img) {
      let filename_service_img = Date.now() + req.files.service_img.name;
      req.files.service_img.mv('public/' + filename_service_img);
      updateData.service_img = filename_service_img;
    }

    updateData.description = d.description;
    await ServiceImg.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_service_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await ServiceImg.find().lean());
  res.json({ da: result }); 
};
