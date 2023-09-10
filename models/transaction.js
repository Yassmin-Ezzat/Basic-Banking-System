const { timeStamp } = require('console');
var mongoose= require('mongoose');

const transactionSchema = new mongoose.Schema({

    Sender:{

        type: String
    },

    Receiver:{

        type: String
    },

    AmountTransferred:{

        type: Number
    },

    DateAndTime:{

        type: Date
    }
});

module.exports= mongoose.model('Transactions', transactionSchema);