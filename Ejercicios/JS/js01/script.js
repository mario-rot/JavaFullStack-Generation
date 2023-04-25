console.log("Sesion JS01");

// Sin 7 datos primitivos
// String: "Hola"
console.log("Tipo de dato String: ", "Hola");

// Number: 12, -45, 367.12, +Infinity, - Infinity, NaN
// Los numerivos usan 64 bits para almacenar, pero solo se usan 53 bits para 
// representar el numero.
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45 / 0, -56 / 0, 56 * "Hola");
console.log("Valor Maximo: ", Number.MAX_VALUE);
console.log("Valor Maximo Seguro: ", Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valores numericos enteros, de los que el tipo number
// no puedo representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2: ", Number.MAX_SAFE_INTEGER + 2); // no representa el valor
let myBigInt = 9007199254740991n; // se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("Valor de dato BigInt + 1n: ", myBigInt + 1n);
console.log("Valor de dato BigInt + 2n: ", myBigInt + 2n);


// Boolean 
// Tenemos solo 2 estados: true/false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

// Undefined
// Un dato que es declarado, pero no definido en el tipo
let myVar; // solo de declara
console.log("Tipo de dato undefined: ", myVar);

// null
// Intencionalmente se borra el tipo de dato
let myVarNull; // solo de declara
console.log("Tipo de dato myVarNull: ", typeof (myVarNull)); // undefined
myVarNull = "Saludos Sr. PP"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof (myVarNull)); // String
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof (myVarNull)); // null

// symbol
// crea propiedades privadas en los objetos


// ---------------------------------------------------------------
// Tipos de datos object
// Object: 
const misDatosDePerfil = {
  // clave:valor
  nombre: "Mario",
  apellido: "Rosas",
  edad: 25,
  isBelicoso: false,
  musicaPreferidaPorGenero: {
    rock: "Sognare",
    pop: "The lazy song"
  },
  nombreCompleto: function fullName() {
    return this.nombre + " " + this.apellido + " Hi!"
  }
}

const misDatosDeInstagram = {
  // clave:valor
  nombre: "Mario",
  apellido: "ROT",
  edad: 25,
  isBelicoso: false,
  musicaPreferidaPorGenero: {
    rock: "Sognare",
    pop: "The lazy song"
  },
  nombreCompleto: function fullName() {
    return this.nombre + " " + this.apellido + " Yeih!";
  }
}

console.log("Datos Completos: ", misDatosDePerfil);
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Mi musica de fin de semana:", misDatosDePerfil.musicaPreferidaPorGenero.rock);
console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto());
console.log("Nombre completo: ", misDatosDeInstagram.nombreCompleto());


// Array
// Almacena diferente tipos de datos, su primer elemento indice 0
const cancionesPXNDX = [
  "Romance en Re sostenido",
  "Narcicista por excelencia",
  "Procedimientos para llegar a un comun acuerdo",
  "Los malaventurados no lloran",
  {
    2020: 5,
    2021: 30,
    2022: 56
  }
];

console.log("Primer cancion: ", cancionesPXNDX[1]);
console.log("canciones hechas en el año 2021 : ", cancionesPXNDX[4]["2021"]);

// Metodos de los arreglos

console.log("Num total de elementos: ", cancionesPXNDX.length);
console.log("Contiene la cancion 'Narcicista por excelencia': ", cancionesPXNDX.indexOf("Narcicista por excelencia"));
console.log("Contiene la cancion 'Narcicista por paciencia': ", cancionesPXNDX.indexOf("Narcicista por peciencia"));
console.log("Contiene la cancion 'Narcicista por excelencia' verdadeo o falso: ", cancionesPXNDX.indexOf("Narcicista por excelencia") > -1);


// ----------------------------------------------------------
// Conversion de datos
const myNumber = 420; // Minutos en la sesion JS 01
console.log("Num. de minutos en la sesion: " + myNumber);
// toString
const myNumberTxt = String(myNumber);
console.log("Num. de minutos en la sesion: " + myNumberTxt);

// toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de la sumatoria: ", sumatoria);


// toPasrseInt
const myStringInt = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInt);
console.log("Valor de la sumatoria entera: ", sumatoriaEntera);

// toParseFloat
const myStringFloat = "420.2020";
const sumatoriaFloat = 80 + parseFloat(myStringFloat);
console.log("Valor de la sumatoria flotante: ", sumatoriaFloat);

// to Boolean
const myStringBool = "true";

if (myStringBool) {
  console.log("myStringBool: ", Boolean(myStringBool));
} else {
  console.log("myStringBool is not a boolean")
}

// Boolean
// para que sea False debe ser: "", 0, null, undefined
// Number
// [] = 0, [30] = 30, [3,1] = NaN, false = 0, true = 1 
// String
// [] = "", [1,2] = "1,2", function(){} = function(){},  







