const curEl_one = document.getElementById('currency-one');
const amtEl_one = document.getElementById('amount-one');
const curEl_two = document.getElementById('currency-two');
const amtEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {

}

// Event listeners
curEl_one.addEventListener('change', calculate);
amtEl_one.addEventListener('input', calculate);
curEl_two.addEventListener('change', calculate);
amtEl_two.addEventListener('input', calculate);

calculate();