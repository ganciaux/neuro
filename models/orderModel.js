const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

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
              quantity: Number,
              unitCost: Number,
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

orderSchema.plugin(autoIncrement.plugin, { model: 'Order', field: 'orderId', startAt: 1, });

//order.resetCount(function(err, nextCount) {});

orderSchema.pre('save', function (next) {
  let price = 0.0;
  this.articles.forEach(element => price += Math.round(element.quantity*element.price*100)/100 );
  this.price=price;
  next();
});

exports.OrderType = mongoose.model('OrderType', orderTypeSchema);
exports.Order = mongoose.model('Order', orderSchema);