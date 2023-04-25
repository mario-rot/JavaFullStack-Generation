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
