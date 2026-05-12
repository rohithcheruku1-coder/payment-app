const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const Payment =
 require('./models/Payment');

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
 'mongodb://127.0.0.1:27017/paymentDB'
)

.then(() =>
 console.log('MongoDB Connected')
)

.catch(err =>
 console.log(err)
);

app.post('/save-payment',
 async (req, res) => {

  try {

    const payment =
      new Payment(req.body);

    await payment.save();

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json({
      success: false
    });

  }

});

app.listen(5000, () => {

  console.log(
   'Server Running On Port 5000'
  );

});