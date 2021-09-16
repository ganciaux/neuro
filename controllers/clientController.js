const {ClientModel} = require('../models/clientModel');
const factory = require('./handlerFactory');

exports.getAllClients = factory.getAll(ClientModel);
exports.getClient = factory.getOne(ClientModel);
exports.createClient = factory.createOne(ClientModel);
exports.updateClient = factory.updateOne(ClientModel);
exports.deleteClient = factory.deleteOne(ClientModel);
