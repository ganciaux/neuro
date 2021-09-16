const express = require('express');
const referenceController = require('../controllers/referenceController');
const router = express.Router();

//Reference
router.get('/', referenceController.getAllReferences);
router.get('/:id', referenceController.getReference);
router.get('/:model/:field/:year', referenceController.getYearReference);
router.post('/', referenceController.createReference);
router.put('/:model/:field/:year', referenceController.updateYearReference);

module.exports = router;