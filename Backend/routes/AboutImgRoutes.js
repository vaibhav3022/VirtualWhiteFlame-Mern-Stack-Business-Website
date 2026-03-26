const express = require('express');
const router = express.Router();
const AboutImgController = require('../controllers/AboutImgController');

router.get('/about_img', AboutImgController.getHome);
router.get('/add_about_img', AboutImgController.getAdd);
router.post('/save_about_img', AboutImgController.save);
router.get(['/list_about_img', '/about_img_list'], AboutImgController.getList);
router.get('/delete_about_img/:id', AboutImgController.deleteItem);
router.get('/edit_about_img/:id', AboutImgController.getEdit);
router.post('/update_about_img', AboutImgController.update);
router.get('/about_img_api', AboutImgController.getApi);

module.exports = router;
