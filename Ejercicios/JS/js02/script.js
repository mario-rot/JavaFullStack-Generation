console.log("Session JS02");

// --------- Funcion Declarada -----
// function declaration, function statement
// Una caracteristica es que las funciones declaradas tienen hoisting

console.log("El resultado de 5*10= " + multiplica(5, 10))


//  function nombreFuncionCamelCase(parametros){
//   Instrucciones;
// }
//
// multiplica(operandoA, operando B);
//
// { // este es un bloque de codigo
//   const operandoA = 5;
//   const operandoB = 10;
//   const resultado = operandoA*operandoB;
//   console.log(resultado);
// }

// { // este es un bloque de codigo
//   const operandoA = 8;
//   const operandoB = 8;
//   const resultado = operandoA*operandoB;
//   console.log(resultado);
// } 

multiplica(5, 10);
multiplica(8, 8);
multiplica(-4, 2);

function multiplica(operandoA, operandoB) {
  const resultado = operandoA * operandoB;
  console.log(resultado)
  return resultado
}

function divide(dividendo, divisor) {
  return dividendo / divisor;
}

console.log(divide(5, 2)); // 2.5
console.log(divide(5, "2")); // 2.5
console.log(divide("5", "2")); // 2.5
console.log(divide("5 0", "2")); // NaN


// -------- Funciones expresadas -------------
// Function expressions
// Son declaradas dentro de la asignaion de una variable
// Pueden ser anonimas, no tienen nombre
// Las funciones expresadas no tienen hoisting, por que
// no se carga en memodia hasta que se utilice.

// Sintaxis

// const nombreVariable = function nombreFuncion(parametros){
//   Instrucciones;
// }

const sumt = function sumatoria(a, b) {
  return a + b;
}

const rest = function(a, b) {
  return a - b;
}

const pot = function(a, b) {
  return a ** b;
}
console.log(sumt(9, 9));
console.log(rest(90, 20));


// ---------- Funciones Autoinvocadas ------
// self-invoking functions
// se autoinvocan, se pueden definir a funciones anonimas


(function() {
  console.log("Me autoinvoco en la funcion");
})();


// ------------ Funciones flecha ----------------------
// Arrow functions
// Son funciones similares a las expresadas, pero:
// No requieren la palabra function
// Si tienen una sola instruccion no requiere las {}
// Se la instruccion es el mismo retorno, no requiere la palabra return
//
// const areaRectangulo = function(base, altura){
// return base * altura;
// }

const areaRectangulo = (base, altura) => base * altura;

console.log("Area de rectangulo 5x3 = " + areaRectangulo(5, 3));

// --------------- Parametros Default ---------------------
/**
 * Este comentario es la documentacion de la funcion
  * @param {number} base esto es la descripcion base
  * @param {number} altura esto es la descripcion de altura
  * @returns area del rectangulo
  */

const areaTriangulo = (base = 1, altura = 1) => base * altura / 2;

console.log("Area de triangulo es b:5 a:10 = ", areaTriangulo(5, 10));
console.log("Area de triangulo b:8 = " + areaTriangulo(8));

// ---------------- Parametros rest ---------------------
// Rest parameters sintaxis: ...nombreParametro
// Nos permite representar una serie de valores indefinidos en  los argumentos
// Estos se presentan como un array
// Los rest parameters deben estar siempre al final de la lista

function sumatoriaVariosNumeros(a, b, ...restDatos) {
  let suma;
  suma = a + b;
  for (let index = 0; index < restDatos.length; index++) {
    suma += restDatos[index]
  }

  return suma;
}

console.log("Sumatoria de varios numeros, me da: ", sumatoriaVariosNumeros(5, 6));
console.log("Sumatoria de varios numeros, me da: ", sumatoriaVariosNumeros(5, 6, 9, 10));
console.log("Sumatoria de varios numeros, me da: ", sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50));

// funciones de callback
// Funcion que se pasa a otra funcion como argumento para luego invocarse
// para completar algun tipo de rutina o accion.


// 3 funciones, una que imprima en consola, alert, DOM h1
// un parametro de entrada

function consolePrint(message) {
  console.log(message);
};

function consoleAlert(message) {
  alert(message);
};

function createH1(message) {
  document.getElementById("h1").innerHTML = message; // option 1
  // document.querySelector("div").innerHTML = `<h1>${message}</h1>`; // option 2
  // document.createElement("h1"); // option 3
  // h1.innerHTML = message;
  // document.body.appendChild(h1);
};


function getNameToPrint(options = []) {
  const name = prompt("Tell me your name")
  const text = `Hi ${name}, I hope you're haveing a good day`;
  if (options.includes(1))
    consolePrint(text);
  if (options.includes(2))
    consoleAlert(text);
  if (options.includes(3))
    createH1(text);
}


// getNameToPrint([1, 2, 3]);


function getNameAndPrint(printFunction) {
  const name = prompt("Tell me your name")
  const text = `Hi ${name}, I hope you're haveing a good day`;
  printFunction(text);
}

// getNameAndPrint(consolePrint);
// getNameAndPrint(consoleAlert);
// getNameAndPrint(createH1);

// ----------------------------------------------------------------------
// Ejercicio 2:  Escribe una funcion que tome un arreglo de numeros, 
// dublique el valoe de cada numero del arreglo e improma el nuevo 
// arreglo actualizado.
// [5,10,15,20,25] -> [10,20,30,40,50]

const numbers = [5, 10, 15, 20, 25]

function double(arr) {
  const doubleNumbers = [];
  for (let index = 0; index < arr.length; index++) {
    doubleNumbers.push(arr[index] * 2);
  }
  return doubleNumbers;
}

console.log(double(numbers))

// with Map

const duplicate = (number) => number * 2;

function doubleWithMap(array) {
  // const duplicateNumber = array.map(duplicate);
  // const duplicateNumber = array.map(function(number){return number*2});
  const duplicateNumber = array.map(number => number * 2)
  return duplicateNumber;
}

console.log(doubleWithMap(numbers));

// ---------------------------------------------------------------
// Ejercicio 4

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
*/



const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Music"];


function cursosEnComun(arr, arr1) {
  let message = "Cursos en comun: "
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr[i] == arr1[j]) {
        message += arr[i] + ', ';
      }
    }
  }
  console.log(message.slice(0, -2))
}
cursosEnComun(student1Courses, student2Courses);

function cursosEnComunV2(arr, arr1) {
  let fin = arr.filter(course => arr1.includes(course))
  console.log('Cursos en comun: ' + fin)
  return fin;
}

cursosEnComunV2(student1Courses, student2Courses);

const commonCourses = cursosEnComunV2(student1Courses, student2Courses);
console.log('Common courses: ' + commonCourses.join(', '))


function cursosEnComunV3(...courses) {
  let fin = courses[0].filter(course => courses[1].includes(course));

  for (let index = 2; index < courses.length; index++) {
    fin = fin.filter(course => courses[index].includes(course));
  }
  console.log('Cursos en comun: ' + fin)
  return fin;
}

const commonCourses2 = cursosEnComunV3(student1Courses, student2Courses, student3Courses);
console.log('Common courses: ' + commonCourses2.join(', '))

// ------------------------ Contar la cantidad de carateres de una frase ---------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo con arrow function
phrase = 'pepe pecas pica papas con un pico y una pala'

const countChar = (p, phrase) => phrase.split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase))


// --------------- Funciones recursivas -------------------
// Es una tecnica de programacion en donde la funcion se llama asi misma
// Se debe tener precausion de no entrar a un bucle infinito


/*
function funcionRecursiva(valor){
if (condicion de paro){

} else {
// llamada recursiva.
}
}
 */
const factorialConCicloFor = (numero) => {
  let total = numero;
  for (let index = numero - 1; index > 0; index--) {
    total *= index;

  }
  return total
}

console.log("Facotrial de 5: " + factorialConCicloFor(5))

const factorialRecursivo = (numero) => {
  if (numero === 1) {
    return numero;
  } else {
    return numero * factorialRecursivo(numero - 1)
  }
}

console.log("Facotrial de 5: " + factorialRecursivo(5))



const fibRecursivo = (numero) => {
  if (numero <= 1) {
    return numero;
  } else {
    return fibRecursivo(numero - 1) + fibRecursivo(numero - 2);
  }
}

console.log("Fib en la posicion seleccionada es: ", fibRecursivo(10))

// -------------------- FUNCION RECURSIVA EJERCICIO -----------------
// 
//
const saludo = (numero) => {
  if (numero > 1) {
    saludo(numero - 1);
    console.log("Saludo " + numero);
  } else {
    console.log("Saludo " + numero);
  }
}

saludo(10);




