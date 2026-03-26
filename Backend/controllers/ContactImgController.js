const ContactImg = require('../models/ContactImg');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('contact_img/home.ejs');
exports.getAdd = (req, res) => res.render('contact_img/add_contact.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};
    let filename_contact_img = Date.now() + req.files.contact_img.name;
    req.files.contact_img.mv('public/' + filename_contact_img);

    await ContactImg.create({
      contact_img: filename_contact_img,
      description: d.description
    });
    res.redirect('/list_contact_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await ContactImg.find().lean());
  res.render('contact_img/contact_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await ContactImg.findByIdAndDelete(req.params.id);
  res.redirect('/list_contact_img');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await ContactImg.findById(req.params.id).lean());
  res.render('contact_img/contact_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    
    if (req.files && req.files.contact_img) {
      let filename_contact_img = Date.now() + req.files.contact_img.name;
      req.files.contact_img.mv('public/' + filename_contact_img);
      updateData.contact_img = filename_contact_img;
    }

    updateData.description = d.description;
    await ContactImg.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_contact_img');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await ContactImg.find().lean());
  res.json({ da: result }); 
};
