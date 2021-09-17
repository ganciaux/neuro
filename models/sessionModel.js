const mongoose = require('mongoose');
const Client = require('../models/clientModel');
const Order = require('../models/orderModel');
const Type = require('../models/typeModel');

const sessionSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client',
    required: [true, 'Session must belong to a client'],
  },
  orderId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Order',
  },
  typeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Type',
  },
  statusId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Type',
  },
  date:{
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    trim: true
  }
},{
  timestamps: true,
});

sessionSchema.pre(/^find/, function (next) {
  this.populate('clientId')
  .populate('orderId')
  .populate('statusId')
  .populate('typeId');
  next();
});

const SessionModel = mongoose.model('Session', sessionSchema);

module.exports = SessionModel;