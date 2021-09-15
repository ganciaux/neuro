const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
    {
        client: {
          type: mongoose.Schema.ObjectId,
          ref: 'Client',
          required: [true, 'Session must belong to a client'],
        },
        order: {
          type: mongoose.Schema.ObjectId,
          ref: 'Order',
        },
        type: {
          type: String,
          required: true,
          enum: {
            values: ['Defaut', 'consultation', 'remédiation', 'restitution', 'evalutation', 'bilan', 'suivi', 'synthèse'],
          },
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
    },
    {
        timestamps: true,
    }
);

const SessionModel = mongoose.model('Session', sessionSchema);

module.exports = SessionModel;