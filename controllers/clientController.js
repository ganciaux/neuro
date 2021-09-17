const Client = require('../models/clientModel');
const factory = require('./handlerFactory');

exports.getAllClients = factory.getAll(Client, {path: 'typeId', select: 'label'}, "-typeId");
exports.getClient = factory.getOne(Client, [{path: 'typeId', select: 'label'},{path: 'bills', select: 'price'},{path: 'orders', select: 'price'},{path: 'payments', select: 'price'},{path: 'sessions', select: 'date'}]);
exports.createClient = factory.createOne(Client);
exports.updateClient = factory.updateOne(Client);
exports.deleteClient = factory.deleteOne(Client);
