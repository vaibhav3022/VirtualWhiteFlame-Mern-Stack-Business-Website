const Counting = require('../models/Counting');
const mapIds = require('../utils/mapIds');

exports.getHome = (req, res) => res.render('counting/home.ejs');
exports.getAdd = (req, res) => res.render('counting/add_counting.ejs');

exports.save = async (req, res) => {
  try {
    let d = req.body || {};

    await Counting.create({
      counting_name: d.counting_name,
      counting_count: d.counting_count,
      counting_desc: d.counting_desc,
    });
    res.redirect('/list_counting');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getList = async (req, res) => {
  let result = mapIds(await Counting.find().lean());
  res.render('counting/counting_list.ejs', { result });
};

exports.deleteItem = async (req, res) => {
  await Counting.findByIdAndDelete(req.params.id);
  res.redirect('/list_counting');
};

exports.getEdit = async (req, res) => {
  let result = mapIds(await Counting.findById(req.params.id).lean());
  res.render('counting/counting_update.ejs', { result });
};

exports.update = async (req, res) => {
  try {
    let d = req.body || {};
    let updateData = {};
    updateData.counting_name = d.counting_name;
    updateData.counting_count = d.counting_count;
    updateData.counting_desc = d.counting_desc;

    await Counting.findByIdAndUpdate(req.body.id, updateData);
    res.redirect('/list_counting');
  } catch (err) { res.status(500).send("Error"); }
};

exports.getApi = async (req, res) => {
  let result = mapIds(await Counting.find().lean());
  res.json({ da: result }); 
};
