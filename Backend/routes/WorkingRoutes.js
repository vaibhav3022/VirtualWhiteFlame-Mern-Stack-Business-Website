const express = require('express');
const router = express.Router();
const WorkingController = require('../controllers/WorkingController');

router.get('/working', WorkingController.getHome);
router.get('/add_working', WorkingController.getAdd);
router.post('/save_working', WorkingController.save);
router.get(['/list_working', '/working_list'], WorkingController.getList);
router.get('/delete_working/:id', WorkingController.deleteItem);
router.get('/edit_working/:id', WorkingController.getEdit);
router.post('/update_working', WorkingController.update);
router.get('/working_api', WorkingController.getApi);

module.exports = router;
