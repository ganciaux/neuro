const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
        },
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 60,
            trim: true
        },
        description: {
            type: String,
            maxlength: 1024,
        },  
        price: {
            type: Number,
            default: 0.0,
        },
        sessions: {
            type: Number,
            required: [true, 'An article must have a session number'],
        }
    },
    {
        timestamps: true,
    }
);

const ArticleModel = mongoose.model('Article', articleSchema);

module.exports = ArticleModel;