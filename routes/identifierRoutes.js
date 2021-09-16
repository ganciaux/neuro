const express = require('express');
const identifierController = require('../controllers/identifierController');
const router = express.Router();

//identifier
router.get('/', identifierController.getAllIdentifiers);
router.get('/:id', identifierController.getIdentifier);
router.get('/:model/:field/:year', identifierController.getYearIdentifier);
router.post('/', identifierController.createIdentifier);
router.put('/:model/:field/:year', identifierController.updateYearIdentifier);

module.exports = router;