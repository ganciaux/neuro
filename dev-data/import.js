const fs = require('fs');
const db = require('../db.js');
const Article = require('../models/articleModel');
const Bill = require('../models/billModel');
const Client = require('../models/clientModel');
const Order = require('../models/orderModel');
const Payment = require('../models/paymentModel');
const Reference = require('../models/referenceModel');
const Session = require('../models/sessionModel');
const Type = require('../models/typeModel');

const articles = JSON.parse(fs.readFileSync(`${__dirname}/articles.json`, 'utf-8'));
const clients = JSON.parse(fs.readFileSync(`${__dirname}/clients.json`, 'utf-8'));
const status = JSON.parse(fs.readFileSync(`${__dirname}/status.json`, 'utf-8'));
const types = JSON.parse(fs.readFileSync(`${__dirname}/types.json`, 'utf-8'));

const deleteData = async () => {
  try {
    await Article.deleteMany();
    await Client.deleteMany();
    await Type.deleteMany();
    console.log('Data successfully deleted !');
  } catch (err) {
    console.log(err);
  }
};

const importData = async () => {
  await deleteData();
  try {
    await Type.create(status);
    await Type.create(types);
    
    await Article.create(articles);

    const typesClient = await Type.find({model:"client"});
    clients.forEach(element => element.typeId=typesClient[0]._id );
    await Client.create(clients);

    console.log('Data successfully loaded !');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
