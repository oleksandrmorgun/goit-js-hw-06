const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.children;

console.log(`Total categories: ${categoriesItems.length}`);

Array.from(categoriesItems).forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryItems = item.lastElementChild.children;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
