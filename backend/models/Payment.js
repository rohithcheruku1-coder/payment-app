const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

  name: String,

  amount: Number,

  paymentMethod: String,

  paymentStatus: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports =
 mongoose.model('Payment', paymentSchema);