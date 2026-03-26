const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');

router.get('/service', ServiceController.getHome);
router.get('/add_service', ServiceController.getAdd);
router.post('/save_service', ServiceController.save);
router.get(['/list_service', '/service_list'], ServiceController.getList);
router.get('/delete_service/:id', ServiceController.deleteItem);
router.get('/edit_service/:id', ServiceController.getEdit);
router.post('/update_service', ServiceController.update);
router.get('/service_api', ServiceController.getApi);

module.exports = router;
