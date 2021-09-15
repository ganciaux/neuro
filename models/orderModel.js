const mongoose = require('mongoose');
const Identifier = require('../models/identifierModel');
const utils = require('../utils/utils');

const orderTypeSchema = new mongoose.Schema(
{
  type: {
    type: String,
    required: true,
    enum: {
      values: ['Autre', 'consultation neuropsychologique', 'sceance de remédiation cognitive', 'evalutation psychométrique', 'evaluation neuropsycologique petite', 'evaluation neuropsycologique grande', 'atelier mémoire', 'devis' ],
    },
  },
  code: {
    type: String,
    unique: true
  }
});

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
        type: {
          type: mongoose.Schema.ObjectId,
          ref: 'OrderType',
          required: [true, 'Order must have a type'],
      },
      date:{
        type: Date,
        default: Date.now(),
      },
        reference: {
            type: String,
            required: false,
            minlength: 5,
          },
        status: {
            type: String,
            required: true,
            enum: {
              values: ['En cours', 'Annulée', 'Validée'],
            },
          },
        description: {
            type: String,
            required: false,
            minlength: 5,
            trim: true
        },
        sessions: {
            type: Number,
            default: 0.0,
            required: [true, 'A Order must have a session number'],
        },
        price: {
            type: Number,
            default: 0.0,
        },
        articles: [
            {
              article: {
                type: mongoose.Schema.ObjectId,
                ref: 'Article',
                required: true
              },
              quantity: {
                type: Number,
                default: 0.0,
                required: true
              },
              unitCost: {
                type: Number,
                default: 0.0,
                required: true
              },
              description: {
                type: String,
                default: '',
                trim: true
              }
            }
          ],
    },
    {
        timestamps: true,
    }
);

orderSchema.pre('save', function (next) {
  let price = 0.0;
  this.articles.forEach(element => price += Math.round(element.quantity*element.unitCost*100)/100 );
  this.price=price;
  
  //find({model:"order",field:"orderId", "years":{$elemMatch: {year:2021}}})
  //.update({"years": {$elemMatch: {id: <object-id>}}}, {$inc: {"answer.$.votes": 1}});

  //this.reference = `${this.date.getFullYear()}${utils.charPad(this.date.getMonth() + 1,2)}${utils.charPad(this.orderId,4)}`;
  next();
});

exports.OrderType = mongoose.model('OrderType', orderTypeSchema);
exports.Order = mongoose.model('Order', orderSchema);