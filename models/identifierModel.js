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
        years: [{
            id: {
                type: mongoose.Schema.ObjectId,
                required: true
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
        }]
    },
    {
        timestamps: true,
    }
);

IdentifierSchema.index({ "model": 1, "field": 1}, { "unique": true });

IdentifierSchema.pre('save', function (next) {
    console.log('save:', this)
    if (this.isNew) {
        console.log("Init years...")
        for(i=2020;i<2030;i++){
            this.years.push({year:i, count:0});
        }
    } else {
        console.log("Update...")
    }
    console.log(this.years)
    next();
  });

const IdentifierModel = mongoose.model('Identifier', IdentifierSchema);

module.exports = IdentifierModel;
