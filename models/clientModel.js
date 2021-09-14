const mongoose = require('mongoose');
const { isEmail } = require('validator');

const clientSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
        },
        type: {
            type: String,
            required: true,
            enum: {
              values: ['Madame', 'Monsieur', 'Etablissement', 'Autre'],
            },
          },
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 60,
            trim: true
        },
        firstname: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 60,
            trim: true
        },
        phone: {
            type: String,
            maxlength: 32,
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            minlength: 5,
            lowercase: true,
            unique: true,
            trim: true
        },
        address: {
            type: String,
            maxlength: 32,
        },
        city: {
            type: String,
            maxlength: 32,
        },
        zip: {
            type: String,
            maxlength: 32,
        },
        origin:{

        },
        birthdate:{
            type: Date,
            default: Date.now(),
        },
        comment: {
            type: String,
            maxlength: 1024,
        }
    },
    {
        timestamps: true,
    }
);

const ClientModel = mongoose.model('Client', clientSchema);

module.exports = ClientModel;