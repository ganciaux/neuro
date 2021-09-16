const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const { isEmail } = require('validator');

mongoose.plugin(slug);

const clientTypeSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      unique: true
    }
});

const clientSchema = new mongoose.Schema({
    slug: { 
        type: String, 
        slug: ["name", "firstname"], 
        unique: true 
    },
    typeId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ClientType',
        default: mongoose.Types.ObjectId()
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
    birthdate:{
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
        maxlength: 1024,
        trim: true
    }
}, {
    timestamps: true,
});

const ClientTypeModel = mongoose.model('ClientType', clientSchema);
const ClientModel = mongoose.model('Client', clientSchema);

exports.ClientTypeModel = ClientTypeModel;
exports.ClientModel = ClientModel;