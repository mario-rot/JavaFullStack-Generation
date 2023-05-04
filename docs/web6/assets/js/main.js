console.log("Hola desde un script externo")

function changeColor(color) {
  const refName = document.getElementById("name");
  refName.style.color = color;
}

function getReferenceFullName() {
  return document.getElementById("fullname")
}

function changeColorParagraph(color, refObj) {
  refObj.style.color = color;
}

function resetColor() {
  const refObjs = document.getElementsByClassName("text-color");
  for (let index = 0; index < refObjs.length; index++) {
    const element = refObjs[index];
    element.style.color = "purple";
  }
}


function changeGreeting() {
  document.getElementById("greeting").innerHTML = "Hello " + prompt("What's your name?") + "! ✌";
}

