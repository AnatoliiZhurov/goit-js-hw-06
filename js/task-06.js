const txtInput = document.querySelector(`#validation-input`);
console.log(txtInput);
const txtLength = parseInt(txtInput.dataset.length);
console.log(typeof txtLength);
const valid = txtInput.addEventListener(`blur`, () => {
  const inputValue = txtInput.value.trim().length;
  console.log(typeof inputValue);
  if (inputValue === txtLength) {
    txtInput.classList.add(`valid`);
    txtInput.classList.remove(`invalid`);
  } else {
    txtInput.classList.add(`invalid`);
    txtInput.classList.remove(`valid`);
  }
  console.log(txtInput.classList);
});
