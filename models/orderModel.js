const mongoose = require('mongoose');
const Reference = require('./referenceModel');
const utils = require('../utils/utils');
const Article = require('../models/articleModel');
const Client = require('../models/clientModel');
const Order = require('../models/orderModel');
const Type = require('../models/typeModel');

const orderSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client',
    required: [true, 'Order must belong to a client'],
  },
  parentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Order',
  },
  statusId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Type',
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
  date:{
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    trim: true,
  },
  sessions: {
    type: Number,
    default: 0.0,
    required: [true, 'A Order must have a session number'],
    validate : {
      validator : Number.isInteger,
      message : '{VALUE} is not an integer value'
    }
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
          required: true,
        },
        quantity: {
          type: Number,
          default: 0,
          required: true,
          validate : {
            validator : Number.isInteger,
            message : '{VALUE} is not an integer value'
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
    ],
}, {
  timestamps: true,
});

orderSchema.pre('save', async function (next) {
  console.log(this.date)
  const doc = await Reference.getNewReference("order", "refId", this.date.getFullYear());
  this.refId = doc.count;
  this.ref = utils.getReference(this.date, doc.count );
  this.price = utils.getArticlesPrice(this.articles);
  next();
});

orderSchema.pre('findOneAndUpdate', function (next) {
  this._update.price = utils.getArticlesPrice(this._update.articles);
  next();
});

orderSchema.pre(/^find/, function (next) {
  this.populate('clientId')
  .populate('parentId')
  .populate('statusId')
  .populate('articleId');
  next();
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;