async function payNow() {

  const name =
   document.getElementById('name').value;

  const amount =
   document.getElementById('amount').value;

  if (!name || !amount) {

    alert('Enter all fields');

    return;

  }

  // YOUR REAL UPI ID

  const upiId =
   '7032472492@axl';

  // UPI PAYMENT LINK

  const upiLink =

`upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  // OPEN PAYMENT APP

  window.location.href =
    upiLink;

  // OPTIONAL DATABASE SAVE

  const paymentData = {

    name,

    amount,

    paymentMethod: 'UPI',

    paymentStatus: 'PENDING'

  };

  try {

    await fetch(

      'https://payment-backend-exbi.onrender.com/save-payment',

      {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body:
         JSON.stringify(paymentData)

      }

    );

  } catch (error) {

    console.log(error);

  }

}