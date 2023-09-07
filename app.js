var express = require('express');
var app = express();
const dotenv = require('dotenv');

dotenv.config();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.set('view engine', 'ejs');
app.use(express.static("public", { maxAge: "7d" }));

// index page
app.get('/', function(req, res) {
  res.render('\index.ejs');
});

// about page
app.get('/Home', function(req, res) {
  res.render('\index.ejs');
});

const port = process.env.PORT;

app.listen(port);
console.log('Server is listening on port 8080');