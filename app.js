var express = require('express');
var app = express();
const dotenv = require('dotenv');

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
app.get('/Customers', function(req, res) {
  res.render('\customers.ejs');
});

//Transfer
app.get('/Transfer', function(req, res) {
  res.render('\transfer.ejs');
});

//Transactions
app.get('/transactions', function(req, res) {
  res.render('\transactions.ejs');
});


const port = process.env.PORT;

app.listen(port);
console.log('Server is listening on port ****');