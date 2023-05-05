console.log("Session JS07")

// ---------------Desarollo sincrónico(secuencial)-----------

const primerPaso = () => {
  console.log("01- Inicio de mi programa JS07");
}

const segundoPaso = () => {
  console.log("02- Desarrollo de mi programa");
}

const tercerPaso = () => {
  console.log("03- Fin de mi programa");
}

primerPaso();
segundoPaso();
tercerPaso();

// --------------- Programacion asíncrona  ----------------
// setTimeOut()
// Establece un temporizador que ejecuta una funcion
// una vez que expire el temporizador

const desarrolloAsincrono = (saludo) => {
  console.log("Hola" + saludo);
}

const segundoPasoAsincrono = (saludo) => {
  // setTimeout(/*fncCallbacl*/ desarrolloAsincrono, 4000, saludo)
  // setTimeout((saludoRef) => console.log("Hola " + saludoRef), 4000, saludo)
  setTimeout(() => console.log("Hola" + saludo), 4000)
}

console.log("--------------------------------")
primerPaso();
// setTimeout(desarrolloAsincrono, 3000, "ch26")
segundoPasoAsincrono("ch26 con 4 s. de retardo");
tercerPaso();


// ------------------  setInterval ------------------------
// Ejecuta una funcion de manera reiterada con un tipo de retardo fijo entre cada llamada.
//
const segundoPasoConIntervalo = (saludo) => {
  setInterval(() => console.log("La banda llamada malandra es " + saludo), 2000);
}

console.log('---------- setInterval -------------');
primerPaso();
// segundoPasoConIntervalo("ch26 wu, wu");
tercerPaso();


// ----------- Iniciar y detener setInterval -----------------
//

const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;
refStopInterval.disabled = true;


const stateButtons = (startState, stopState) => {
  refStartInterval.disabled = startState;
  refStopInterval.disabled = stopState;
}

const disableStart = () => {
  // refStartInterval.disabled = true;
  // refStopInterval.disabled = false;
  stateButtons(true, false)
}

const enableStart = () => {
  // refStartInterval.disabled = false;
  // refStopInterval.disabled = true;
  stateButtons(false, true);
}

refStartInterval.addEventListener("click", () => {
  // console.log("se pulso iniciar");
  idInterval = setInterval(() => refDateH2.innerHTML = (new Date).toLocaleString(), 1000);
  // refStartInterval.disabled = true;
  // refStopInterval.disabled = false;
  disableStart();
})


refStopInterval.addEventListener("click", () => {
  // console.log("se pulso detener")
  clearInterval(idInterval);
  // refStartInterval.disabled = false;
  // refStopInterval.disabled = true;
  enableStart();
});
