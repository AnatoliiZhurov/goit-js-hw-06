const input = document.querySelector(`#font-size-control`);
console.log(input);
const textOutSize = document.querySelector(`#text`);
console.log(textOutSize);

input.addEventListener(`input`, sizeChange);

function sizeChange(event) {
  textOutSize.style.fontSize = event.currentTarget.value + "px";
}
