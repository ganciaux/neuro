const Identifier = require('../models/identifierModel');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

exports.getAllIdentifiers = factory.getAll(Identifier);
exports.getIdentifier = factory.getOne(Identifier);
exports.createIdentifier = factory.createOne(Identifier);
exports.updateIdentifier = factory.updateOne(Identifier);
exports.getYearIdentifier = async (req, res, next) => {
    const doc = await Identifier.find({ model: req.params.model, field: req.params.field, year: req.params.year });

    if (!doc) {
        return next(new AppError('No document found with this id', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        }
    });
}
exports.updateYearIdentifier = async (req, res, next) => {
    const doc = await Identifier.findOneAndUpdate(
        { model: req.params.model, field: req.params.field, year: req.params.year },
        { $inc: { count: 1 } },
        {new: true});
    if (!doc) {
        return next(new AppError('No document found with this id', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        }
    });
}

/*
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
*/
//exports.updateIdentifier = factory.updateOne(Identifier);
//exports.deleteIdentifier = factory.deleteOne(Identifier);
