const mongoose = require('mongoose');
const Client = require('../models/clientModel');
const Bill = require('../models/billModel');
const Type = require('../models/typeModel');

const paymentSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Client',
        required: [true, 'Payment must belong to a client'],
    },
    billId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Bill',
    },
    typeId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Type'
    },
    statusId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Type'
    },
    price: {
        type: Number,
        default: 0.0,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
        trim: true
    }
}, {
 timestamps: true,
});

paymentSchema.pre(/^find/, function (next) {
    this.populate('clientId')
    .populate('billId')
    .populate('statusId')
    .populate('typeId');
    next();
  });

const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;