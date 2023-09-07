var mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config();

let URI= process.env.URI;

mongoose.connect( URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
