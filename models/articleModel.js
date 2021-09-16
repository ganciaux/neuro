const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 60,
        trim: true
    },
    slug: { 
        type: String, 
        slug: "name", 
        unique: true, 
        slugPaddingSize: 3 
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
        default:0,
        required: [true, 'An article must have a session number'],
    }
}, {
  timestamps: true,
});

const ArticleModel = mongoose.model('Article', articleSchema);

module.exports = ArticleModel;