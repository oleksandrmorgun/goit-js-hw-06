1.

const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

// 1. Count and output the number of categories
const categoryCount = categoryItems.length;
console.log('Number of categories:', categoryCount);

// 2. Iterate through each category and output the title and number of elements
categoryItems.forEach((category) => {
  const titleElement = category.querySelector('h2');
  const categoryTitle = titleElement.textContent.trim();
  const categoryElements = category.querySelectorAll('li');
  const elementCount = categoryElements.length;

  console.log('Category:', categoryTitle);
  console.log('Elements:', elementCount);
});
