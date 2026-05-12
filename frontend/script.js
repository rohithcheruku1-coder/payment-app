function showOptions() {

  const name =
    document.getElementById('name').value;

  const amount =
    document.getElementById('amount').value;

  if (!name || !amount) {

    alert('Enter all fields');

    return;

  }

  document.getElementById(
   'paymentOptions'
  ).style.display = 'block';

}

async function payNow(method) {

  const name =
    document.getElementById('name').value;

  const amount =
    document.getElementById('amount').value;

  // YOUR UPI ID
  const upiId =
   '7032472492@axl';

  const upiLink =

`upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  window.location.href =
    upiLink;

  setTimeout(async () => {

    const paymentData = {

      name,

      amount,

      paymentMethod: method,

      paymentStatus: 'SUCCESS'

    };

    await fetch(
      'https://payment-backend-exbi.onrender.com/save-payment',
      {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(paymentData)

    });

    document.getElementById(
      'status'
    ).innerHTML =
      'Payment Successful';

  }, 3000);

}