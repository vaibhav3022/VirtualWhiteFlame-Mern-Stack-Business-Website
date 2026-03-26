const express = require('express');
const router = express.Router();
const FaqController = require('../controllers/FaqController');

router.get('/faq', FaqController.getHome);
router.get('/add_faq', FaqController.getAdd);
router.post('/save_faq', FaqController.save);
router.get(['/list_faq', '/faq_list'], FaqController.getList);
router.get('/delete_faq/:id', FaqController.deleteItem);
router.get('/edit_faq/:id', FaqController.getEdit);
router.post('/update_faq', FaqController.update);
router.get('/faq_api', FaqController.getApi);

module.exports = router;
