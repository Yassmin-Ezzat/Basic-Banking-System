const { timeStamp } = require('console');
var mongoose= require('mongoose');

const customerSchema = new mongoose.Schema({

    Name:{

        type: String
    },

    Email:{

        type: String
    },

    PhoneNumber:{

        type: String
    },

    currentBalance:{

        type: Number
    }
});

module.exports= mongoose.model('Customers', customerSchema);