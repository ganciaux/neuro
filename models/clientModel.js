const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const { isEmail } = require('validator');

mongoose.plugin(slug);

const clientSchema = new mongoose.Schema({
    slug: { 
        type: String, 
        slug: ["name", "firstname"], 
        unique: true,
        slugPaddingSize: 3,
    },
    typeId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Type',
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    zip: {
        type: String,
        trim: true,
    },
    birthdate:{
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true,
});

const ClientModel = mongoose.model('Client', clientSchema);

module.exports = ClientModel;