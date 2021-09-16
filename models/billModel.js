const mongoose = require('mongoose');

const billStatusSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  code: {
    type: String,
    unique: true
  }
});

const billSchema = new mongoose.Schema({
  clientId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Client',
      required: [true, 'Bill must belong to a client'],
  },
  orderId: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Bill must belong to an order'],
  },
  refId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Identifier',
    required: [true, 'Bill must have a reference'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  statusId: {
    type: mongoose.Schema.ObjectId,
    ref: 'BillStatus',
    required: [true, 'Bill must have a status'],
  },
  price: {
    type: Number,
    default: 0.0,
  },
  description: {
    type: String,
    maxlength: 1024,
    trim: true
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
  this.price = setPrice(this.articles);
  next();
});

const BillStatusModel = mongoose.model('BillStatus', billStatusSchema, 'billstatus');
const BillModel = mongoose.model('Bill', billSchema);

exports.BillStatusModel = BillStatusModel;
exports.BillModel = BillModel;