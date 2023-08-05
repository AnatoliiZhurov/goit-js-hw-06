const changeBtn = document.querySelector(`.change-color`);
console.log(changeBtn);
console.dir(changeBtn);
const txtColor = document.querySelector(`.color`);

changeBtn.addEventListener(`click`, () => {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  txtColor.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
