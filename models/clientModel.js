const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const { isEmail } = require('validator');

mongoose.plugin(slug);

const clientSchema = new mongoose.Schema(
    {
        slug: { type: String, slug: ["name", "firstname"], unique: true },
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
            maxlength: 64,
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

const ClientModel = mongoose.model('Client', clientSchema);

module.exports = ClientModel;