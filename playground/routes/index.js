const express = require("express");
const router = express.Router();
const userController = require("../controllers/control");

router.get('', userController.getAllUsers);
router.post('/add', userController.addUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
