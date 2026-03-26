const express = require('express');
const router = express.Router();
const GalleryController = require('../controllers/GalleryController');

router.get('/gallerys', GalleryController.getHome);
router.get('/add_gallery', GalleryController.getAdd);
router.post('/save_gallery', GalleryController.save);
router.get(['/list_gallery', '/gallery_list'], GalleryController.getList);
router.get('/delete_gallery/:id', GalleryController.deleteItem);
router.get('/edit_gallery/:id', GalleryController.getEdit);
router.post('/update_gallery', GalleryController.update);
router.get('/gallery_api', GalleryController.getApi);

module.exports = router;
