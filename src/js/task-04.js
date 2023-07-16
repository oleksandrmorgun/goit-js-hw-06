// Get the counter elements
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.querySelector('#value');

// Initialize the counter value
let counterValue = 0;

// Update the interface with the current counter value
function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

// Decrement the counter value when the decrement button is clicked
decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounterValue();
});

// Increment the counter value when the increment button is clicked
incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounterValue();
});

// Initial update of the counter value
updateCounterValue();
