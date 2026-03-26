const express = require('express');
const router = express.Router();
const GalleryImgController = require('../controllers/GalleryImgController');

router.get('/gallery_img', GalleryImgController.getHome);
router.get('/add_gallery_img', GalleryImgController.getAdd);
router.post('/save_gallery_img', GalleryImgController.save);
router.get(['/list_gallery_img', '/gallery_img_list'], GalleryImgController.getList);
router.get('/delete_gallery_img/:id', GalleryImgController.deleteItem);
router.get('/edit_gallery_img/:id', GalleryImgController.getEdit);
router.post('/update_gallery_img', GalleryImgController.update);
router.get('/gallery_img_api', GalleryImgController.getApi);

module.exports = router;
