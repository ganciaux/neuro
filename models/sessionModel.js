const mongoose = require('mongoose');

const sessionTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  code: {
    type: String,
    unique: true
  }
});

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
  sessionTypeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Order',
  },
  date:{
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ['Annulé', 'Validé'],
    },
  },
  description: {
    type: String,
    maxlength: 1024,
    trim: true
  }
},{
  timestamps: true,
});

const SessionTypeModel = mongoose.model('SessionType', sessionTypeSchema);
const SessionModel = mongoose.model('Session', sessionSchema);

exports.SessionTypeModel = SessionTypeModel;
exports.SessionModel = SessionModel;