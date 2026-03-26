const Client = require('../models/Client');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('client/home.ejs');
exports.getAdd = (req, res) => res.render('client/add_client.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_client_logo = Date.now() + req.files.client_logo.name;
    req.files.client_logo.mv('public/' + filename_client_logo);
    let filename_client_img = Date.now() + req.files.client_img.name;
    req.files.client_img.mv('public/' + filename_client_img);

    await Client.create({
      client_desc: d.client_desc,
      client_name: d.client_name,
      client_add: d.client_add,
      client_logo: filename_client_logo,
      client_img: filename_client_img,
    });
    res.redirect('/list_client');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Client.find().lean());
  res.render('client/client_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.redirect('/list_client');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Client.findById(req.params.id).lean());
  res.render('client/client_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.client_desc = d.client_desc;
    updateData.client_name = d.client_name;
    updateData.client_add = d.client_add;
    if (req.files && req.files.client_logo) {
      let filename_client_logo = Date.now() + req.files.client_logo.name;
      req.files.client_logo.mv('public/' + filename_client_logo);
      updateData.client_logo = filename_client_logo;
    }
    if (req.files && req.files.client_img) {
      let filename_client_img = Date.now() + req.files.client_img.name;
      req.files.client_img.mv('public/' + filename_client_img);
      updateData.client_img = filename_client_img;
    }

    await Client.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_client');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Client.find().lean());
  res.json({ da: result }); 
};
