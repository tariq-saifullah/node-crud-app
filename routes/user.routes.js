const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/getAll', userController.getAllUsers);
router.post('/addUser', userController.addUser);
router.put('/update', userController.updateUser);
router.delete('/remove', userController.removeUserById);

module.exports = router;