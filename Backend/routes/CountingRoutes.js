const express = require('express');
const router = express.Router();
const CountingController = require('../controllers/CountingController');

router.get('/counting', CountingController.getHome);
router.get('/add_counting', CountingController.getAdd);
router.post('/save_counting', CountingController.save);
router.get(['/list_counting', '/counting_list'], CountingController.getList);
router.get('/delete_counting/:id', CountingController.deleteItem);
router.get('/edit_counting/:id', CountingController.getEdit);
router.post('/update_counting', CountingController.update);
router.get('/counting_api', CountingController.getApi);

module.exports = router;
