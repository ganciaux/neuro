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

/*
const articles = JSON.parse(fs.readFileSync(`${__dirname}/articles.json`, 'utf-8'));
const clients = JSON.parse(fs.readFileSync(`${__dirname}/clients.json`, 'utf-8'));
const status = JSON.parse(fs.readFileSync(`${__dirname}/status.json`, 'utf-8'));
const types = JSON.parse(fs.readFileSync(`${__dirname}/types.json`, 'utf-8'));
*/

const deleteData = async () => {
  try {
    await Article.deleteMany();
    await Bill.deleteMany();
    await Client.deleteMany();
    await Order.deleteMany();
    await Payment.deleteMany();
    await Reference.deleteMany();
    await Session.deleteMany();
    await Type.deleteMany();
    console.log('Data successfully deleted !');
  } catch (err) {
    console.log(err);
  }
};

const importData = async () => {
  await deleteData();
  try {
    //Article
    var articleConsultation = new Article({"name":"Consultation neuropsychologique", "description":"Consultation neuropsychologique", "price": 60.00, "sessions": 1});
    var articleRemediation = new Article({"name":"Scéance de remédiation cognitive", "description":"Scéance de remédiation cognitive de 45min", "price": 50.00, "sessions": 3});
    var articleEvalPsyp = new Article({"name":"Évalutation psychométrique (petite)", "description":"Évalutation psychométrique wppsi IV, WISC V 3/4 séances", "price": 260.00, "sessions": 3});
    var articleEvalPsyg = new Article({"name":"Évalutation psychométrique (grande)", "description":"Évalutation psychométrique wppsi IV, WISC V 3/4 séances", "price": 400.00, "sessions": 3});
    var articleAtelier = new Article({"name":"Atelier mémoire", "description":"Atelier mémoire 1h30", "price": 120.00, "sessions": 1});
    var articleReunion = new Article({"name":"Réunion école", "description":"Réunion école 1h", "price": 50.00, "sessions": 1});
    await articleConsultation.save();
    await articleRemediation.save();
    await articleEvalPsyp.save();
    await articleEvalPsyg.save();
    await articleAtelier.save();
    await articleReunion.save();
    //Type client
    var typeMadame = new Type({ model: "client", field: 'typeId', label: "Madame", short: "Mme", "css": "", "value": 1});
    var typeMister = new Type({ model: "client", field: 'typeId', label: "Monsieur", short: "M", "css": "", "value": 1});
    var typeCompany = new Type({ model: "client", field: 'typeId', label: "Societé", short: "Societé", "css": "", "value": 1});
    await typeMadame.save();
    await typeMister.save();
    await typeCompany.save();
    //Type payment
    var typeCheque = new Type({"model":"payment", "field":"typeId", "label": "Chèque", "short": "Chèque", "css": "", "value": 1});
    var typeCash = new Type({"model":"payment", "field":"typeId", "label": "Liquide", "short": "Liquide", "css": "", "value": 1});
    var typeCard = new Type({"model":"payment", "field":"typeId", "label": "Carte bleu", "short": "CB", "css": "", "value": 1});
    var typeTransfert = new Type({"model":"payment", "field":"typeId", "label": "Virement", "short": "Virement", "css": "", "value": 1});
    await typeCheque.save();
    await typeCash.save();
    await typeCard.save();
    await typeTransfert.save();
    //Type session
    var typeAutre = new Type({"model":"session", "field":"typeId", "label": "Autre","short": "Autre", "css": "", "value": 1});
    var typeConsult = new Type({"model":"session", "field":"typeId", "label": "Consultation neuropsychologique", "short":"Consultation", "css": "", "value": 1});
    var typeRemediation = new Type({"model":"session", "field":"typeId", "label": "Scéance de remédiation cognitive", "short":"Remédiation", "css": "", "value": 1});
    var typeEvaluationPsy = new Type({"model":"session", "field":"typeId", "label": "Évalutation psychométrique", "short":"Évalutation psycho", "css": "", "value": 1});
    var typeEvaluationNeuroP = new Type({"model":"session", "field":"typeId", "label": "Évaluation neuropsycologique (petite)", "short":"Évaluation neuro", "css": "", "value": 1});
    var typeEvaluationNeuroG = new Type({"model":"session", "field":"typeId", "label": "Évaluation neuropsycologique (grande)", "short":"Évaluation neuro", "css": "", "value": 1});
    var typeAtelier = new Type({"model":"session", "field":"typeId", "label": "Atelier mémoire", "short": "Atelier", "css": "", "value": 1});
    var typeRestitution = new Type({"model":"session", "field":"typeId", "label": "Restitution", "short": "Restitution", "css": "", "value": 1});
    var typeBilan = new Type({"model":"session", "field":"typeId", "label": "Bilan", "short": "Bilan", "css": "", "value": 1});
    var typeSuivi = new Type({"model":"session", "field":"typeId", "label": "Suivi", "short": "Suivi", "css": "", "value": 1});
    var typeSynthese = new Type({"model":"session", "field":"typeId", "label": "Synthèse", "short": "Synthèse", "css": "", "value": 1});
    await typeAutre.save();
    await typeConsult.save();
    await typeRemediation.save();
    await typeEvaluationPsy.save();
    await typeEvaluationNeuroP.save();
    await typeEvaluationNeuroG.save();
    await typeAtelier.save();
    await typeRestitution.save();
    await typeBilan.save();
    await typeSuivi.save();
    await typeSynthese.save();
    //status bill
    var statusUnpaid = new Type({"model":"bill", "field":"statusId", "label": "Non payée", "short": "Non payée", "css": "", "value": 1});
    var statusPartially = new Type({"model":"bill", "field":"statusId", "label": "Partiellement", "short": "Partiellement", "css": "", "value": 1});
    var statusPaid = new Type({"model":"bill", "field":"statusId", "label": "Payée", "short": "Payée", "css": "", "value": 1});
    var statusBillMarked = new Type({"model":"bill", "field":"statusId", "label": "Pointée", "short": "Pointée", "css": "", "value": 1});
    await statusUnpaid.save();
    await statusPartially.save();
    await statusPaid.save();
    await statusBillMarked.save();
    //status order
    var statusInprogress = new Type({"model":"order", "field":"statusId", "label": "En cours d'édition", "short": "En cours", "css": "", "value": 1});
    var statusCanceled = new Type({"model":"order", "field":"statusId", "label": "Annulée", "short": "Annulée", "css": "", "value": 1});
    var statusValidated = new Type({"model":"order", "field":"statusId", "label": "Validée", "short": "Validée", "css": "", "value": 1});
    await statusInprogress.save();
    await statusCanceled.save();
    await statusValidated.save();
    //status payment
    var statusReceived = new Type({"model":"payment", "field":"statusId", "label": "Reçu", "short": "Reçu", "css": "", "value": 1});
    var statusPaymentMarked = new Type({"model":"payment", "field":"statusId", "label": "Pointée", "short": "Pointée", "css": "", "value": 1});
    await statusReceived.save();
    await statusPaymentMarked.save();
    //status session
    var statusPlanned = new Type({"model":"session", "field":"statusId", "label": "Plannifié", "short": "Plannifié", "css": "", "value": 1});
    var statusReported = new Type({"model":"session", "field":"statusId", "label": "Reporté", "short": "Reporté", "css": "", "value": 1});
    var statusSessionCanceled = new Type({"model":"session", "field":"statusId", "label": "Annulé", "short": "Annulé", "css": "", "value": 1});
    var statusSessionValidated = new Type({"model":"session", "field":"statusId", "label": "Validé", "short": "Validé", "css": "", "value": 1});
    await statusPlanned.save();
    await statusReported.save();
    await statusSessionCanceled.save();
    await statusSessionValidated.save();
    //Reference
    var refBill2020 = new Reference({"model":"bill", "field":"refId", "year": 2020, "count": 0});
    var refBill2021 = new Reference({"model":"bill", "field":"refId", "year": 2021, "count": 0});
    var refOrder2020 = new Reference({"model":"order", "field":"refId", "year": 2020, "count": 0});
    var refOrder2021 = new Reference({"model":"order", "field":"refId", "year": 2021, "count": 0});
    await refBill2020.save();
    await refBill2021.save();
    await refOrder2020.save();
    await refOrder2021.save();
    //Client
    var clientGhis = new Client({"name": "anciaux", "firstname": "ghislain", "typeId": typeMister, "email": "ghislain@gmail.com", "phone": "06", "address": "3 rue des écoles", "city": "Braumont", "zip": "54260", "description": "texte de test"});
    var clientAurel = new Client({"name": "bigerel", "firstname": "aurélie", "typeId": typeMadame, "email": "aurelie@gmail.com", "phone": "06", "address": "3 rue des écoles", "city": "Braumont", "zip": "54260", "description": "texte de test 2"});
    await clientGhis.save();
    await clientAurel.save();
    //Order
    var orderGhis = new Order({"clientId": clientGhis, "status": statusInprogress, "description":"commentaire de test", "sessions": 0, "articles":[{"articleId":articleConsultation, "quantity":1, "unitCost":50},{"articleId":articleEvalPsyg, "quantity":1, "unitCost":460}]});
    var orderAurel = new Order({"clientId": clientAurel, "status": statusInprogress, "description":"commentaire de test", "sessions": 0, "articles":[{"articleId":articleAtelier, "quantity":1, "unitCost":120},{"articleId":articleReunion, "quantity":1, "unitCost":50}]});
    await orderGhis.save();
    await orderAurel.save();
    //Session
    var sessionGhis = new Session({"clientId": clientGhis, "orderId": orderGhis, "typeId": typeAutre, "statusId": statusValidated, "date": Date.now(), "description": "Decription de test..."});
    var sessionAurel = new Session({"clientId": clientAurel, "orderId": orderAurel, "typeId": typeRemediation, "statusId": statusCanceled, "date": Date.now(), "description": "Decription de test..."});
    await sessionGhis.save();
    await sessionAurel.save();
    //Bill
    var billGhis = new Bill({"clientId": clientGhis, "orderId": orderGhis, "statusId": statusUnpaid, "date": Date.now(), "description":"commentaire de test", "articles":[{"articleId":articleConsultation, "quantity":1, "unitCost":50},{"articleId":articleEvalPsyg, "quantity":1, "unitCost":460}]});
    var billAurel = new Bill({"clientId": clientAurel, "orderId": orderAurel, "statusId": statusPaid, "date": Date.now(), "description":"commentaire de test", "articles":[{"articleId":articleAtelier, "quantity":1, "unitCost":120},{"articleId":articleReunion, "quantity":1, "unitCost":50}]});
    await billGhis.save();
    await billAurel.save();
    //Payment
    var paymentGhis1 = new Payment({"clientId": clientGhis, "billId": billGhis, "typeId": typeCard, "statusId": statusUnpaid, "date": Date.now(), "description":"commentaire de test", "price":100});
    var paymentGhis2 = new Payment({"clientId": clientGhis, "billId": billGhis, "typeId": typeCard, "statusId": statusPaymentMarked, "date": Date.now(), "description":"commentaire de test", "price":200});
    var paymentAurel = new Payment({"clientId": clientAurel, "billId": billAurel, "typeId": typeCash, "statusId": statusPaid, "date": Date.now(), "description":"commentaire de test", "price":150});
    await paymentGhis1.save();
    await paymentGhis2.save();
    await paymentAurel.save();
    /* */
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
