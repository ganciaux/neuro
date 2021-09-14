const Session = require('../models/sessionModel');
const factory = require('./handlerFactory');

exports.getAllSessions = factory.getAll(Session);
exports.getSession = factory.getOne(Session);
exports.createSession = factory.createOne(Session);
exports.updateSession = factory.updateOne(Session);
exports.deleteSession = factory.deleteOne(Session);
