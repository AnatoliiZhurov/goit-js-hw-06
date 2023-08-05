const list = document.querySelector(`#categories`);
const categories = [...list.children];

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector(`h2`).textContent;
  const countElements = category.querySelectorAll(`li`).length;
  console.log(`Category:`, categoryTitle);
  console.log("Elements:", countElements);
});
