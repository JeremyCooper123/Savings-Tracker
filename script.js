const form = document.getElementById('transaction-form');
const list = document.getElementById('bucket-list');

// Replace this with your actual Apps Script Web App URL:
const API_URL = 'https://script.google.com/macros/s/AKfycbyuWarsnsT7yTZUzAWrm-jSw9sJa5QpqfIMQsyAbqGd/dev';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const bucket = document.getElementById('bucket').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (bucket && !isNaN(amount)) {
    // Send data to Google Sheets
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({ bucket, amount }),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Saved to Google Sheets!');
        form.reset();
      } else {
        alert('Oops! Something went wrong.');
      }
    } catch (err) {
      alert('Error connecting to Google Sheets.');
      console.error(err);
    }
  }
});

