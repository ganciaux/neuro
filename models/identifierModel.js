const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const IdentifierSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            required: true,
        },
        field: { 
            type: String,     
        },
        year: {
            type: Number,
            default: 0,
            required: true,
            unique: true,
            validate : {
                validator : Number.isInteger,
                message   : '{VALUE} is not an integer value'
            }
        },
        count: {
            type: Number,
            default: 0,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

IdentifierSchema.index({ "model": 1, "field": 1, "year": 1}, { "unique": true });

IdentifierSchema.pre('save', function (next) {
    console.log('save:', this)
    if (this.isNew) {
        this.count = 0;
    } else {
        console.log("Update...")
    }
    next();
  });

IdentifierSchema.statics.getNewIdentifier = async function getNewIdentifier(model, field, year){
    const doc = await this.findOneAndUpdate(
        { model, field, year },
        { $inc: { count: 1 } },
        {new: true});
    return doc;
}

const IdentifierModel = mongoose.model('Identifier', IdentifierSchema);

module.exports = IdentifierModel;
