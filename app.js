var express = require('express');
var app = express();
const dotenv = require('dotenv');
var connectDB = require('./config/db.js');
const mongoose = require('mongoose');
const Customer = require('./models/customer.js');
const Transaction = require('./models/transaction.js');
dotenv.config();


app.use(express.urlencoded({ extended: true }));



// set the view engine to ejs
app.set('view engine', 'ejs');



// use res.render to load up an ejs view file
app.set('view engine', 'ejs');
app.use(express.static("public", { maxAge: "7d" }));



// Routes

// index page
app.get('/', function (req, res) {
  res.render('\index.ejs');
});

// home page
app.get('/Home', function (req, res) {
  res.render('\index.ejs');
});

//customers page
app.get('/Customers', async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.render('customers', { customers });
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).send('Internal Server Error');
  }
});

//transfer page
app.get('/Transfer', async (req, res) => {
  try {

    const customerID = req.query.customer_Id;
    const customers = await Customer.find({ AccountNumber: { $ne: customerID } });
    res.render('transfer', { customerID, customers });

  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.post('/transfer/validation', async (req, res) => {

  try {

    const { from, to, amount } = req.body;
    console.log(from);
    console.log(to);


    const amount1 = parseFloat(amount);
    const from1 = await Customer.findOne({ AccountNumber: from });
    const to1 = await Customer.findOne({ AccountNumber: to });

    if (from1.currentBalance >= amount1) {
      from1.currentBalance = from1.currentBalance - amount1;
      to1.currentBalance = to1.currentBalance + amount1;

      await from1.save();
      await to1.save();

      const newTransaction = new Transaction({

        Sender: from1.Name,
        Receiver: to1.Name,
        AmountTransferred: amount1,
        DateAndTime: new Date(),

      });

      await newTransaction.save();


      const messageClass = 'success';

      const responseMessage = 'Successful transfer!';
      res.send({ message: responseMessage, class: messageClass });


    }
    else {
      const messageClass = 'error';
      const responseMessage = 'Your balance is insufficient!';
      res.send({ message: responseMessage, class: messageClass });
    }
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).send('Internal Server Error');
  }
});

//Transactions page
app.get('/Transactions', async (req, res) => {
  try {
    console.log('done.')
    const transactions = await Transaction.find({});
    res.render('transactions', { transactions });
  } catch (error) {
    console.error('Error fetching transaction', error);
    res.status(500).send('Internal Server Error');
  }
});


const port = process.env.PORT;

app.listen(port);
console.log('Server is listening on port ****');