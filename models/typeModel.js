const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const typeSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    short: {
        type: String,
    },
    css: {
        type: String,
    },
    value: {
        type: Number,
        default: 0,
        required: true,
        validate : {
            validator : Number.isInteger,
            message : '{VALUE} is not an integer value'
        }
    },/*
    slug: {
        type: String, 
        slug: ["model", "code"], 
        unique: true,
        slugPaddingSize: 3 
    }*/
}, {
  timestamps: true,
});

const TypeModel = mongoose.model('Type', typeSchema);

module.exports = TypeModel;