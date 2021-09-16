const mongoose = require('mongoose');

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

const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;