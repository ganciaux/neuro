const mongoose = require('mongoose');
const Client = require('./clientModel');
const Order = require('./orderModel');
const Type = require('./typeModel');

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
    required: true,
  },
  statusId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Type',
    required: true,
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

const SessionModel = mongoose.model('Session', sessionSchema);

module.exports = SessionModel;