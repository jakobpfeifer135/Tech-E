const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGODB_URI:', process.env.MONGODB_URI);
// console.log('CONN_STRING:', process.env.CONN_STRING);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech_e_db');

module.exports = mongoose.connection;
