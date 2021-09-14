const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
        client: {
            type: mongoose.Schema.ObjectId,
            ref: 'Client',
            required: [true, 'Bill must belong to a client'],
        },
        order: {
            type: mongoose.Schema.ObjectId,
            required: [true, 'Bill must belong to an order'],
        },
        reference: {
          type: String,
          required: false,
          minlength: 5,
        },
        date:{
          type: Date,
          default: Date.now(),
        },
        status: {
            type: String,
            required: true,
            enum: {
              values: ['non payée', 'partiellement', 'payée'],
            },
        },
        price: {
            type: Number,
            default: 0.0,
        },
        comment: {
            type: String,
            required: false,
            minlength: 5,
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

const BillModel = mongoose.model('Bill', billSchema);

module.exports = BillModel;