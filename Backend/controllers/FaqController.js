const Faq = require('../models/Faq');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('faq/home.ejs');
exports.getAdd = (req, res) => res.render('faq/add_faq.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};

    await Faq.create({
      que: d.que,
      ans: d.ans,
    });
    res.redirect('/list_faq');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Faq.find().lean());
  res.render('faq/faq_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Faq.findByIdAndDelete(req.params.id);
  res.redirect('/list_faq');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Faq.findById(req.params.id).lean());
  res.render('faq/faq_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.que = d.que;
    updateData.ans = d.ans;

    await Faq.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_faq');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Faq.find().lean());
  res.json({ da: result }); 
};
