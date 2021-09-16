const mongoose = require('mongoose');
const Reference = require('./referenceModel');
const utils = require('../utils/utils');

const orderTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  code: {
    type: String,
    unique: true
  }
});

const statusTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  code: {
    type: String,
    unique: true
  }
});

const orderSchema = new mongoose.Schema({
  clientId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Client',
      required: [true, 'Order must belong to a client']
  },
  parentId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Order'
  },
  typeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'OrderType'
  },
  statusId: {
    type: mongoose.Schema.ObjectId,
    ref: 'StatusType'
  },
  orderId: {
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
    trim: true
  },
  date:{
    type: Date,
    default: Date.now()
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
}
);

orderSchema.pre('save', async function (next) {
  console.log(this.date)
  const doc = await Reference.getNewReference("order", "orderId", this.date.getFullYear());
  this.orderId = doc.count;
  this.ref = utils.getReference(this.date, doc.count );
  this.price = utils.getArticlesPrice(this.articles);
  next();
});

orderSchema.pre('findOneAndUpdate', function (next) {
  this._update.price = utils.getArticlesPrice(this._update.articles);
  next();
});

exports.OrderType = mongoose.model('OrderType', orderTypeSchema);
exports.Order = mongoose.model('Order', orderSchema);