const mongoose = require('mongoose');

const connection_string = process.env.MONGO_CONNECTION_STRING || 'mongodb+srv://teamBat:0dptsWPsbSufEtcR@cscl.7cnhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/CSCL';

mongoose
    .connect(connection_string, { useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
