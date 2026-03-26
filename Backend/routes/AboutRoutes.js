const express = require('express');
const router = express.Router();
const AboutController = require('../controllers/AboutController');

router.get('/aboutus', AboutController.getHome);
router.get('/add_about', AboutController.getAdd);
router.post('/save_about', AboutController.save);
router.get(['/list_about', '/about_list'], AboutController.getList);
router.get('/delete_about/:id', AboutController.deleteItem);
router.get('/edit_about/:id', AboutController.getEdit);
router.post('/update_about', AboutController.update);
router.get('/about_api', AboutController.getApi);

module.exports = router;
