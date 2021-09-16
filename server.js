const express = require('express');
const dotenv = require('dotenv');
const db = require('./db.js');
const articleRoutes = require('./routes/articleRoutes');
const billRoutes = require('./routes/billRoutes');
const clientRoutes = require('./routes/clientRoutes');
const referenceRoutes = require('./routes/referenceRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const appError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

dotenv.config({path: './config/.env'})

const app = express();

//body/cookie parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' })); //data from form

//routes
app.use('/api/articles', articleRoutes);
app.use('/api/bills', billRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/references', referenceRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/sessions', sessionRoutes);

app.all('*', (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server`, 404));
});

//server
app.listen(process.env.PORT, () => {
  console.log(`Listenning on port ${process.env.PORT}`)
})

app.use(globalErrorHandler);

