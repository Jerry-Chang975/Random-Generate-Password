const submitBtn = document.querySelector('#submitBtn');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const includeNumbers = document.querySelector('#includeNumbers');
const includeSymbols = document.querySelector('#includeSymbols');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    !lowercase.checked &&
    !uppercase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    alert('Please select at least one option');
  } else {
    event.defaultPrevented = false;
  }
});
