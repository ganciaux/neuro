const mongoose = require('mongoose');
const Client = require('./clientModel');
const Bill = require('./billModel');
const Type = require('./typeModel');

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
        ref: 'Type',
        required: true,
    },
    statusId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Type',
        required: true,
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

const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;