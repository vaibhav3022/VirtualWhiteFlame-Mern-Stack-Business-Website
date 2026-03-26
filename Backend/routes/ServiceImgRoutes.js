const express = require('express');
const router = express.Router();
const ServiceImgController = require('../controllers/ServiceImgController');

router.get('/service_img', ServiceImgController.getHome);
router.get('/add_service_img', ServiceImgController.getAdd);
router.post('/save_service_img', ServiceImgController.save);
router.get(['/list_service_img', '/service_img_list'], ServiceImgController.getList);
router.get('/delete_service_img/:id', ServiceImgController.deleteItem);
router.get('/edit_service_img/:id', ServiceImgController.getEdit);
router.post('/update_service_img', ServiceImgController.update);
router.get('/service_img_api', ServiceImgController.getApi);

module.exports = router;
