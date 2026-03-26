const express = require('express');
const router = express.Router();
const ContactImgController = require('../controllers/ContactImgController');

router.get('/contact_img', ContactImgController.getHome);
router.get('/add_contact_img', ContactImgController.getAdd);
router.post('/save_contact_img', ContactImgController.save);
router.get(['/list_contact_img', '/contact_img_list'], ContactImgController.getList);
router.get('/delete_contact_img/:id', ContactImgController.deleteItem);
router.get('/edit_contact_img/:id', ContactImgController.getEdit);
router.post('/update_contact_img', ContactImgController.update);
router.get('/contact_img_api', ContactImgController.getApi);

module.exports = router;
