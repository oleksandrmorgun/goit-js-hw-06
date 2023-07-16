// Отримати елементи 
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.querySelector('#value');

// Ініціалізувати значення лічильника
let counterValue = 0;

// Оновити інтерфейс поточним значенням лічильника
function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

// Зменшити значення лічильника, якщо натиснути кнопку зменшення
decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounterValue();
});

// Збільшити значення лічильника, якщо натиснути кнопку збільшення
incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounterValue();
});

// Початкове оновлення значення лічильника
updateCounterValue();
