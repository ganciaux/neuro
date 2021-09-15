const Identifier = require('../models/identifierModel');
const factory = require('./handlerFactory');

exports.getAllIdentifiers = factory.getAll(Identifier);
exports.getIdentifier = factory.getOne(Identifier);
exports.createIdentifier = factory.createOne(Identifier);

exports.updateIdentifier = async (req, res, next) => {

    const doc = await Identifier.findOneAndUpdate({model:req.params.model, field: req.params.field, years: {$elemMatch: {year: req.params.year}}}, {$inc: {"years.$.count": 1}});

    if (!doc) {
        return next(new AppError('No document found with this id', 404));
    }
    res.status(200).json({
    status: 'success',
    data: {
        data: doc,
    },
    });
}

//exports.updateIdentifier = factory.updateOne(Identifier);
//exports.deleteIdentifier = factory.deleteOne(Identifier);
