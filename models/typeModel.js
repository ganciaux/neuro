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
    code: {
        type: String,
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