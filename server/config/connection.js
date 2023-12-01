const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || process.env.CONN_STRING);

module.exports = mongoose.connection;
