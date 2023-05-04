console.log("Session JS06")

// funcion definida 
function findElementByIdFnc01(/* parametros */) {
  /* Instrucciones */
  return 3 * 4;
}

// funcion expresada

const findElementByIdFnc02 = function(/*parametros*/) {
  return 3 * 4;
};

const findElementByIdFnc03 = (/*parametos*/) => {
  return 3 * 4;
};

const findElementByIdFnc04 = () => 3 * 4;

const findElementByIdFnc05 = variableParametro => 3 * 4;

const findElementById = (nameOfDeveloper) => {
  const tituloRef = document.getElementById("titulo");
  tituloRef.innerHTML = tituloRef.innerHTML + ", " + nameOfDeveloper
}
findElementById("Mario!");

const changeSubtitleById = (newTxt) => {
  const subtitleRef = document.getElementById("subtitulo");
  subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newTxt}</em>`;
}

changeSubtitleById('Viernes de Cholos');

// ------------ Encontrar elementos por su tag -------------------------------
// getElementsByTagName()

const changeEmphasis = (newTxt, url) => {
  const emphasisRef = document.getElementsByTagName("em");
  for (element of emphasisRef) {
    console.log(element);
    element.innerHTML = `<a href=${url} target="_blank">${newTxt}<a>`;
  }
};


changeEmphasis("Viernes Friki", 'https://www.youtube.com/watch?v=_Bcjk6v3s0M')


// ----------------------- Selector univeral -------------------
// querySelector
const findElementsByQuerySelector = (query) => {
  const refElements = document.querySelector(query);
  refElements.innerHTML = `La Ch 25 es bien <strong>chida</strong> y les gusta el 11:11!`
}

findElementsByQuerySelector('p')
findElementsByQuerySelector("#noticias")

// ------------------------- Crear un nuevo elemento -------------------
// appendchild

const newElement = () => {
  const newElementRef = document.createElement("p");

  newElementRef.innerHTML = `La Ch 26 le gusta:
  <ul>
    <li>El pan de muerto</li>
    <li>El chismesito</li>
    <li>El pozole</li>
    <li>Pizza</li>
    <li>El pulque</li>
  </ul>
`
  const articleRef = document.querySelector('article');
  articleRef.appendChild(newElementRef); // se aprega el nuevoe elemento
  // Clonar el nodo anterior
  // const nodoClonado() = articleRef.cloneNone(true);
  // document.querySelector("#article-news").appendChild(nodoClonado)
};

newElement();

const changeColor = (color) => {
  const refIntro = document.getElementById("noticias");
  refIntro.style.color = color;
}

changeColor("red");

// Agregar a un elemento un border
// .style-border
// .style.border = thick solid #000ff;

const changeBorder = (color) => {
  const refIntro = document.getElementById("noticias");
  refIntro.style.border = `thick solid ${color}`;
}
changeBorder("blue")

// ---------------------- Propiedades  -----------------------
// display: non (Ocultar el elemento)
// visibility: hidden (Ocultar elemento).

const quitarBoton = () => {
  const buttonRef = document.getElementById("button-B");
  buttonRef.style.display = "none";
}

const ocultarBoton = () => {
  const buttonRef = document.getElementById("button-B");
  buttonRef.style.visibility = "hidden";
}

const restablecerBoton = () => {
  const buttonRef = document.getElementById("button-B")
  buttonRef.style.display = "inline";
  buttonRef.style.visibility = "visible";
}
