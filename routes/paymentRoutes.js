const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();

//payment
router.get('/', paymentController.getAllPayments);
router.get('/:id', paymentController.getPayment);
router.post('/', paymentController.createPayment);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;