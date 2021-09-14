const express = require('express');
const billController = require('../controllers/billController');
const router = express.Router();

//bill
router.get('/', billController.getAllBills);
router.get('/:id', billController.getBill);
router.post('/', billController.createBill);
router.put('/:id', billController.updateBill);
router.delete('/:id', billController.deleteBill);

module.exports = router;