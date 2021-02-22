const mongoose = require('mongoose');

const connection_string = process.env.MONGO_CONNECTION_STRING || 'mongodb+srv://teamBat:0dptsWPsbSufEtcR@cscl.7cnhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/cscl';

mongoose
    .connect(connection_string, {dbName: 'cscl', user:'teamBat', pass:'0dptsWPsbSufEtcR', useNewUrlParser: true, useUnifiedTopology:true})
    .catch(e =>{
        console.error('Connection error', e.message);
    });

mongoose.Promise = global.Promise;

const db = mongoose.connection;

module.exports = db;
