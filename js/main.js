window.addEventListener('load', start);

let inputRed = document.getElementById('input-red');
let inputGreen = document.getElementById('input-green');
let inputBlue = document.getElementById('input-blue');
let textRed = document.getElementById('text-red');
let textGreen = document.getElementById('text-green');
let textBlue = document.getElementById('text-blue');
let resultArea = document.getElementById('result-area');

function start() {
  inputValue();
  changeColor();
  testRgb();
}

function testRgb() {
  inputRed.addEventListener('input', function () {
    inputValue();
    changeColor();
  });
  inputGreen.addEventListener('input', function () {
    inputValue();
    changeColor();
  });
  inputBlue.addEventListener('input', function () {
    inputValue();
    changeColor();
  });
}

function changeColor() {
  resultArea.style.backgroundColor =
    'rgb(' +
    inputRed.value +
    ',' +
    inputGreen.value +
    ',' +
    inputBlue.value +
    ')';
}

function inputValue() {
  textRed.value = inputRed.value;
  textGreen.value = inputGreen.value;
  textBlue.value = inputBlue.value;
}
