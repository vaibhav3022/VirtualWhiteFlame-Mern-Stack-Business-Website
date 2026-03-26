const express = require('express');
const router = express.Router();
const MachineController = require('../controllers/MachineController');

router.get('/machines', MachineController.getHome);
router.get('/add_machines', MachineController.getAdd);
router.post('/save_machines', MachineController.save);
router.get(['/list_machines', '/machines_list'], MachineController.getList);
router.get('/delete_machines/:id', MachineController.deleteItem);
router.get('/edit_machines/:id', MachineController.getEdit);
router.post('/update_machines', MachineController.update);
router.get('/machines_api', MachineController.getApi);

module.exports = router;
