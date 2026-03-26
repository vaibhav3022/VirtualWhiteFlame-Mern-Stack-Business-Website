const Plant = require('../models/Plant');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('plants/home.ejs');
exports.getAdd = (req, res) => res.render('plants/add_plants.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_plants_img = Date.now() + req.files.plants_img.name;
    req.files.plants_img.mv('public/' + filename_plants_img);

    await Plant.create({
      plants_name: d.plants_name,
      plants_add: d.plants_add,
      plants_mobile: d.plants_mobile,
      plants_email: d.plants_email,
      plants_img: filename_plants_img,
      plants_desc: d.plants_desc,
    });
    res.redirect('/list_plants');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Plant.find().lean());
  res.render('plants/plants_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Plant.findByIdAndDelete(req.params.id);
  res.redirect('/list_plants');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Plant.findById(req.params.id).lean());
  res.render('plants/plants_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.plants_name = d.plants_name;
    updateData.plants_add = d.plants_add;
    updateData.plants_mobile = d.plants_mobile;
    updateData.plants_email = d.plants_email;
    updateData.plants_desc = d.plants_desc;
    if (req.files && req.files.plants_img) {
      let filename_plants_img = Date.now() + req.files.plants_img.name;
      req.files.plants_img.mv('public/' + filename_plants_img);
      updateData.plants_img = filename_plants_img;
    }

    await Plant.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_plants');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Plant.find().lean());
  res.json({ da: result }); 
};
