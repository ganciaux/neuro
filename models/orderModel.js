const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        client: {
            type: mongoose.Schema.ObjectId,
            ref: 'Client',
            required: [true, 'Order must belong to a client'],
        },
        parent: {
            type: mongoose.Schema.ObjectId,
            ref: 'Order',
        },
        reference: {
            type: String,
            required: false,
            minlength: 5,
          },
        type: {
            type: String,
            required: true,
            enum: {
              values: ['Autre', 'consultation neuropsychologique', 'sceance de remédiation cognitive', 'evalutation psychométrique', 'evaluation neuropsycologique petite', 'evaluation neuropsycologique grande', 'atelier mémoire', 'devis' ],
            },
        },
        status: {
            type: String,
            required: true,
            enum: {
              values: ['En cours', 'Annulée', 'Validée'],
            },
          },
        comment: {
            type: String,
            required: false,
            minlength: 5,
        },
        sessions: {
            type: Number,
            required: [true, 'A Order must have a session number'],
        },
        price: {
            type: Number,
            default: 0.0,
        },
        articles: [
            {
              type: {
                type: mongoose.Schema.ObjectId,
                ref: 'Article'
              },
              quantity: Number,
              price: Number
            }
          ],
    },
    {
        timestamps: true,
    }
);

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;