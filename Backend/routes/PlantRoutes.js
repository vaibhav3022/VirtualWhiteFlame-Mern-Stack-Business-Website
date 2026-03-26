const express = require('express');
const router = express.Router();
const PlantController = require('../controllers/PlantController');

router.get('/plants', PlantController.getHome);
router.get('/add_plants', PlantController.getAdd);
router.post('/save_plants', PlantController.save);
router.get(['/list_plants', '/plants_list'], PlantController.getList);
router.get('/delete_plants/:id', PlantController.deleteItem);
router.get('/edit_plants/:id', PlantController.getEdit);
router.post('/update_plants', PlantController.update);
router.get('/plants_api', PlantController.getApi);

module.exports = router;
