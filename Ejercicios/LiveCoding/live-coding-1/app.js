const wordLengths = (str, arrayStr) => {
  const strL = str.length;
  const finalWords = [];

  for (let i = 0; i < arrayStr.length; i++) {
    if (strL < arrayStr[i].length) {
      finalWords.push(arrayStr[i]);
    }
  }
  return finalWords;
}

const exampleArray = ["insecto", "bootcamp", "escritorio", "hormiga", "elefante", "alexis", "mariana", "mario", "Automovil", "teclado"];

const exampleStr = "insecto";

// console.log(wordLengths(exampleStr, exampleArray));

const printArray = (arr) => {
  const list = document.getElementById("lista-elementos");
  let strExit = "";
  for (let i = 0; i < arr.length; i++) {
    strExit += `<li>${arr[i]}</li>`;
    // list.appendChild(strExit);
  }
  list.innerHTML = strExit;
}

printArray(wordLengths(exampleStr, exampleArray));
