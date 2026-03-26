const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.get('/client', ClientController.getHome);
router.get('/add_client', ClientController.getAdd);
router.post('/save_client', ClientController.save);
router.get(['/list_client', '/client_list'], ClientController.getList);
router.get('/delete_client/:id', ClientController.deleteItem);
router.get('/edit_client/:id', ClientController.getEdit);
router.post('/update_client', ClientController.update);
router.get('/client_api', ClientController.getApi);

module.exports = router;
