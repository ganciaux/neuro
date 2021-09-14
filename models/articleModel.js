const mongoose = require('mongoose');
const slugify = require('slugify');

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

articleSchema.pre('save', function (next) {
    console.log('Add article slug...')
    this.slug = slugify(`${this.name}`, { lower: true });
    next();
});

const ArticleModel = mongoose.model('Article', articleSchema);

module.exports = ArticleModel;