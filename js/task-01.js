1.

const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

// Підрахувати та вивести кількість категорій
const categoryCount = categoryItems.length;
console.log('Number of categories:', categoryCount);

// Перейти по кожній категорії та вивести назву та кількість елементів
categoryItems.forEach((category) => {
  const titleElement = category.querySelector('h2');
  const categoryTitle = titleElement.textContent.trim();
  const categoryElements = category.querySelectorAll('li');
  const elementCount = categoryElements.length;

  console.log('Category:', categoryTitle);
  console.log('Elements:', elementCount);
});
