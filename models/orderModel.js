const mongoose = require('mongoose');
const Identifier = require('../models/identifierModel');
const AppError = require('../utils/appError');
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
      orderId: {
        type: Number,
        default: 0,
        required: [true, 'A Order must have an orderId'],
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

orderSchema.methods.setRef = async function setRef(){
  const year = this.date.getFullYear();
  const month = this.date.getMonth()+1;
  const doc = await Identifier.getNewIdentifier("order", "orderId", year);
  if (doc){
    this.orderId = doc.count;
    this.reference = `${year}${utils.charPad(month,2)}${utils.charPad(this.orderId,4)}`;
  } else {
    throw new Error(`Can't set new order ref identifier`);
  }
}

function setPrice(articles){
  let price = 0.0;
  articles.forEach(element => price += Math.round(element.quantity*element.unitCost*100)/100 );
  return price;
}

orderSchema.pre('save', async function (next) {
  await this.setRef();      
  this.price = setPrice(this.articles);
  next();
});

orderSchema.pre('findOneAndUpdate', function (next) {
  this._update.price = setPrice(this._update.articles);
  next();
});

exports.OrderType = mongoose.model('OrderType', orderTypeSchema);
exports.Order = mongoose.model('Order', orderSchema);