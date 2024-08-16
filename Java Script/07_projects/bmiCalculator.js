const form = document.querySelector('form');
console.log(form);

//const height = parseInt(document.querySelector('#height').value);
// we could have taken the height here but it would then have an empty value of when the page is loaded

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || isNaN(height) || height < 0) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || isNaN(weight) || weight < 0) {
    results.innerHTML = `please give a valid weight${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>your bmi is ${bmi} and you are under weight</span>`;
    } else if (bmi < 24.9) {
      results.innerHTML = `<span>your bmi is ${bmi} and its normal</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>your bmi is ${bmi} and you are over weight</span>`;
    }
  }
});