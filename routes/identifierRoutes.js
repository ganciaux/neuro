const express = require('express');
const identifierController = require('../controllers/identifierController');
const router = express.Router();

//identifier
router.get('/', identifierController.getAllIdentifiers);
router.get('/:id', identifierController.getIdentifier);
router.post('/', identifierController.createIdentifier);
router.put('/:id', identifierController.updateIdentifier);

module.exports = router;