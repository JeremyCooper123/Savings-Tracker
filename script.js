const form = document.getElementById('transaction-form');
const list = document.getElementById('bucket-list');

let buckets = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bucket = document.getElementById('bucket').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (bucket && !isNaN(amount)) {
    buckets.push({ bucket, amount });
    renderList();
    form.reset();
  }
});

function renderList() {
  list.innerHTML = '';
  buckets.forEach((entry, index) => {
    const li = document.createElement('li');
    li.textContent = `${entry.bucket}: $${entry.amount.toFixed(2)}`;
    list.appendChild(li);
  });
}
