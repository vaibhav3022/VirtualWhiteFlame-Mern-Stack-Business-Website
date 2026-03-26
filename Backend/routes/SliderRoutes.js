const express = require('express');
const router = express.Router();
const SliderController = require('../controllers/SliderController');

router.get('/slider', SliderController.getHome);
router.get('/add_slider', SliderController.getAdd);
router.post('/save_slider', SliderController.save);
router.get(['/list_slider', '/slider_list'], SliderController.getList);
router.get('/delete_slider/:id', SliderController.deleteItem);
router.get('/edit_slider/:id', SliderController.getEdit);
router.post('/update_slider', SliderController.update);
router.get('/slider_api', SliderController.getApi);

module.exports = router;
