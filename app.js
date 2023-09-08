var express = require('express');
var app = express();
const dotenv = require('dotenv');
var connectDB= require('./config/db.js');
const mongoose = require('mongoose');
const Customer = require('./models/customer.js');


dotenv.config();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.set('view engine', 'ejs');
app.use(express.static("public", { maxAge: "7d" }));

// Routes

// index page
app.get('/', function(req, res) {
  res.render('\index.ejs');
});

// home page
app.get('/Home', function(req, res) {
  res.render('\index.ejs');
});

//customers page
// app.get('/Customers', function(req, res) {
// res.render('customers.ejs');
// });

app.get('/Customers', async (req, res) => {
  try {


    console.log('done.')
      const customers = await Customer.find({}); // Fetch all customers from the database    
      res.render('customers', { customers }); // Render the customers.ejs view with the fetched data
  } catch (error) {
      console.error('Error fetching customers:', error);
      res.status(500).send('Internal Server Error');
  }


}


);

//Transfer page
app.get('/Transfer', function(req, res) {
  res.render('transfer.ejs');
});

//Transactions page
app.get('/Transactions', function(req, res) {
  res.render('/transactions.ejs');
});


const port = process.env.PORT;

app.listen(port);
console.log('Server is listening on port ****');