const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contact/contact.controller');

router.get('/get-all-contacts' ,contactController.getAllContacts);
router.get('/get-contact-by-id', contactController.getContactById);
router.post('/create-contact', contactController.createContact);
router.delete('/delete-contact', contactController.deleteContact);
router.put('/update-contact', contactController.updateContact);

module.exports = router;