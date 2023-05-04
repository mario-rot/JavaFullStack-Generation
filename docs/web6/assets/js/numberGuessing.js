let min;
let max;
let gnum;

function start() {
  max = 100;
  min = 1;
  binarySearch()
}

function binarySearch() {
  gnum = min + Math.floor(((max) - min) / 2);
  document.getElementById("main-title").innerHTML = (`Is your number higher, lower or equal to`);
  document.getElementById("number").innerHTML = `${gnum}?`
}

function higherNumber() {
  min = gnum;
  binarySearch()
}

function lowerNumber() {
  max = gnum;
  binarySearch()
}

function equalNumber() {
  document.getElementById("main-title").innerHTML = (`Great! your number is:`);
  document.getElementById("number").innerHTML = `${gnum}`;
}


function recursiveBinarySearch(min, max) {
  // const prompt = require('prompt-sync')();

  let gnum = min + Math.floor(((max) - min) / 2);
  let response = prompt(`Is ${gnum} greater (g), lower(l) or equal (e) to your number?`);
  let result;


  if (response == 'g') {
    result = recursiveBinarySearch(gnum, max);
  } else if (response == 'l') {
    result = recursiveBinarySearch(min, gnum);
  } else {
    result = gnum;
  }
  return result;
}
// console.log(recursiveBinarySearch(1, 100));

