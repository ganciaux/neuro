const mongoose = require('mongoose');
const Article = require('./articleModel');
const Client = require('./clientModel');
const Order = require('./orderModel');
const Reference = require('./referenceModel');
const Type = require('./typeModel');
const utils = require('../utils/utils');

const billSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client',
    required: [true, 'Bill must belong to a client'],
  },
  orderId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Order',
    required: [true, 'Bill must belong to an order'],
  },
  refId: {
    type: Number,
    default: 0,
    required: true,
    validate : {
      validator : Number.isInteger,
      message : '{VALUE} is not an integer value'
    }
  },
  ref: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
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
  description: {
    type: String,
    trim: true
  },
  articles: [
    {
      articleId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Article',
        required: true
      },
      quantity: {
        type: Number,
        default: 0,
        required: true,
        validate: {
          validator: Number.isInteger,
          message: '{VALUE} is not an integer value'
        }
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
  ]
}, {
  timestamps: true,
});

billSchema.pre('save', async function (next) {
  const doc = await Reference.getNewReference("bill", "refId", this.date.getFullYear());
  this.refId = doc.count;
  this.ref = utils.getReference(this.date, doc.count );
  this.price = utils.getArticlesPrice(this.articles);
  next();
});

billSchema.pre('findOneAndUpdate', function (next) {
  this._update.price = utils.getArticlesPrice(this._update.articles);
  next();
});

const BillModel = mongoose.model('Bill', billSchema);

module.exports = BillModel;