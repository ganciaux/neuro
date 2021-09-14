const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        client: {
            type: mongoose.Schema.ObjectId,
            ref: 'Client',
            required: [true, 'Payment must belong to a client'],
        },
        bill: {
            type: mongoose.Schema.ObjectId,
            ref: 'Bill',
        },
        type: {
            type: String,
            required: true,
            enum: {
              values: ['Cheque', 'Espece', 'CB', 'Virement'],
            },
          },
        price: {
            type: Number,
            default: 0.0,
        },
        date:{
            type: Date,
            default: Date.now(),
        },
        status: {
            type: String,
            required: true,
            enum: {
              values: ['Comptabilisé', 'En attente'],
            },
          },
        comment: {
            type: String,
            required: false,
            minlength: 5,
        }
    },
    {
        timestamps: true,
    }
);

const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;