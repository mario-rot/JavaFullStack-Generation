console.log("Session JS08");


// ------------ Crear un objeto en JS ------------------

const frutasColores = {
  // clave:valor
  fresa: ["roja"],
  pepino: ["verde"],
  mango: ["amarillo"],
  naranja: ["anaranjado"],
  mandarina: ["naranja"],
  mora: ["morada"],
  pitaya: ["rosa", "rojo", "blanco", "amarillo"]
}

// --------- Formas de leer un objeto -------------
// leer el color del pepino
console.log("El pepino es: " + frutasColores.pepino);
// Leer el color de la pitaya
console.log("La pitaya es " + frutasColores.pitaya[1])
console.log("La pitaya es " + frutasColores.pitaya.join("-"));

// Modificamos un valor
// Agregar el color verde al mango
frutasColores.mango.push("verde");
// frutasColores.mango = "verde";
console.log("el mango es " + frutasColores.mango);



// --------------- Iterando los objetos ----------------------------
// Iterar los valores con for-in
// iterar sobre todas las propiedades (keys) de un objeto

for (let fruta in frutasColores) {
  console.log(`La ${fruta} tiene los colores ${frutasColores[fruta]}`);
}


// ---------------------- Uso de symbol -------------------------------------
/*
* Se utiliza para añadir claves de propiedades unicas y que esten ocultas
* a otros mecanismos como la iteracion y stringify
*
* Esto nos sirve para realizar el concepto de encapsulacion
* */

const sueldoOculto = Symbol();
let variableX = 23;

const datosDeEmpleado = {
  nombre: "El kesas",
  apellido: "Britas",
  [sueldoOculto]: 50_000,
  // [variableX]:666,
  // 2:12
}

for (let dato in datosDeEmpleado) {
  console.log(`${dato}: ${datosDeEmpleado[dato]}`);
}

// localStorage.setItem("datos-empleado".JSON.stringify(datosDeEmpleado));
// sessionStorage.setItem("datos-empleado", JSON.stringify(datosDeEmpleado));

// Bote de lunetas
const boteLunetas = {
  gramaje: 20,
  sabor: "chocolate",
  costo: 35,
  abrir: function() {
    return "Despachar producto";
  },
  comer: function(gramosComidos) {
    return this.gramaje -= gramosComidos;
  }
}

console.log("Mi bote de lunetas tiene(g): " + boteLunetas.comer(5));

const car = {
  color: "black",
  type: "sedan",
  brand: "Hyundai",
  price: 250_000,
  igniteEngine: (state) => state ? "Engine is on" : "Engine is off", // Es una funcin flecha, pero no puedo usar this dentro de la funcion flecha
}

console.log(car.igniteEngine(false))
