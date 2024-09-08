const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: String,
  type: String,
  category: String,
  amount: Number
}, {
  versionKey: false 
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
