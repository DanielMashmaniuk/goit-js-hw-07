const catogories = document.querySelector(`#categories`);
console.log(`В списке ${catogories.children.length} категории`);
[...catogories.children].forEach((elem) => {
  console.log(`Категория: `, elem.firstElementChild.textContent);
  console.log(`Количество элемментов: `, elem.lastElementChild.children.length);
});