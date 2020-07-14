window.addEventListener('load', start);

let inputRed = document.getElementById('input-red');
let inputGreen = document.getElementById('input-green');
let inputBlue = document.getElementById('input-blue');
let textRed = document.getElementById('text-red');
let textGreen = document.getElementById('text-green');
let textBlue = document.getElementById('text-blue');

function start() {
  textRed.value = inputRed.value;
  textGreen.value = inputGreen.value;
  textBlue.value = inputBlue.value;
  testRgb();
}

function testRgb() {}
