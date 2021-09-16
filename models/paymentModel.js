const mongoose = require('mongoose');

const paymentTypeSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true
    },
    code: {
      type: String,
      unique: true
    }
});

const paymentStatusSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true
    },
    code: {
      type: String,
      unique: true
    }
});

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
        ref: 'paymentType'
    },
    statusId: {
        type: mongoose.Schema.ObjectId,
        ref: 'paymentStatus'
    },
    price: {
        type: Number,
        default: 0.0,
    },
    date:{
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
        maxlength: 1024,
        trim: true
    }
}, {
 timestamps: true,
});

const PaymentTypeModel = mongoose.model('PaymentType', paymentSchema);
const PaymentStatusModel = mongoose.model('PaymentStatus', paymentSchema, 'paymentstatus');
const PaymentModel = mongoose.model('Payment', paymentSchema);

exports.PaymentTypeModel = PaymentTypeModel;
exports.PaymentStatusModel = PaymentStatusModel;
exports.PaymentModel = PaymentModel;