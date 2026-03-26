const Working = require('../models/Working');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('working/home.ejs');
exports.getAdd = (req, res) => res.render('working/add_working.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_working_img = Date.now() + req.files.working_img.name;
    req.files.working_img.mv('public/' + filename_working_img);

    await Working.create({
      working_name: d.working_name,
      working_img: filename_working_img,
      working_desc: d.working_desc,
    });
    res.redirect('/list_working');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Working.find().lean());
  res.render('working/working_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Working.findByIdAndDelete(req.params.id);
  res.redirect('/list_working');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Working.findById(req.params.id).lean());
  res.render('working/working_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.working_name = d.working_name;
    updateData.working_desc = d.working_desc;
    if (req.files && req.files.working_img) {
      let filename_working_img = Date.now() + req.files.working_img.name;
      req.files.working_img.mv('public/' + filename_working_img);
      updateData.working_img = filename_working_img;
    }

    await Working.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_working');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Working.find().lean());
  res.json({ da: result }); 
};
