const Machine = require('../models/Machine');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('machines/home.ejs');
exports.getAdd = (req, res) => res.render('machines/add_machines.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_working_img = Date.now() + req.files.working_img.name;
    req.files.working_img.mv('public/' + filename_working_img);

    await Machine.create({
      machines_name: d.machines_name,
      machines_dec: d.machines_dec,
      working_img: filename_working_img,
    });
    res.redirect('/list_machines');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Machine.find().lean());
  res.render('machines/machines_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Machine.findByIdAndDelete(req.params.id);
  res.redirect('/list_machines');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Machine.findById(req.params.id).lean());
  res.render('machines/machines_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.machines_name = d.machines_name;
    updateData.machines_dec = d.machines_dec;
    if (req.files && req.files.working_img) {
      let filename_working_img = Date.now() + req.files.working_img.name;
      req.files.working_img.mv('public/' + filename_working_img);
      updateData.working_img = filename_working_img;
    }

    await Machine.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_machines');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Machine.find().lean());
  res.json({ da: result }); 
};
