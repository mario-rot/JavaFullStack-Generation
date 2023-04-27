console.log("Session JS03");

// ------------ Declaracion de bloque -----------------


{
  /*
  Las variables declaradas con let y consr
  solo tendran alcance (scope) dentro del bloque
  o bloques anidados
  */
  let nombre = "Segio";
  const apellido = "Torres";
  let edadSergio = 29, edadLuis = 25;
  let numCohorteSergio = numCohorteLuis = 26;// esta es una asignacion incorreta ya que numCohorteLuis es tipo var 
  {
    /*
     Si una variable local tiene el mismo nombre de la 
     variable global o de bloque superior, la variable
     local oculta las otras variables, para que la 
     variable local sea usada.
     */
    let nombre = "Luis";
    const apellido = "SP";
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`);
    console.log(`Luis ${edadLuis} años`);
    console.log(`Sergio: cohorte ${numCohorteSergio}`);
    console.log(`Luis: cohorte ${numCohorteLuis}`);

  }
  console.log(`Me llamo ${nombre} ${apellido}`);
  console.log(`Sergio: ${edadSergio} años`);
  console.log(`Luis ${edadLuis} años`);
  console.log(`Sergio: cohorte ${numCohorteSergio}`);
  console.log(`Luis: cohorte ${numCohorteLuis}`);


}


// console.log(`Me llamo ${nombre} ${apellido}`); // sale error
// console.log(`Me llamo ${nombre} ${apellido}`);
// console.log(`Sergio: ${edadSergio} años`);
// console.log(`Luis ${edadLuis} años`);
// console.log(`Sergio: cohorte ${numCohorteSergio}`);
// console.log(`Luis: cohorte ${numCohorteLuis}`);

//---------------- Condicional if-else ----------------------------
/*
La condicional if ejecuta una sentencia si una condición especificada es evaluada
como verdadera.
sintaxis:
    if(condición) sentencia;
    if(condición) {
      sentencias;
    }
    if(condicion) sentencia;
    else sentencia;
    if(condición) {
      sentencia;
    } else {
      sentencia;
    }
    if(condición) {
      sentencia;
    } else if(condición 2) {
      sentencia;
    } else if(condición 3) {
      sentencia;
    } else if(condición n) {
      sentencia;
    } else {
      sentencia
    }
*/


const temperatura = 20;
let mensaje;

// if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
// else mensaje = `${temperatura} grados no es ideal`;

if (temperatura === 21)
  mensaje = `Temperatura ideal ${temperatura}`;
else if (temperatura > 21)
  mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if (temperatura < 21)
  mensaje = `Temperatura de ${temperatura} grados es fria`;
else
  mensaje = `Temperatura de ${temperatura} grados no existe`


console.log(mensaje)


// ---------------------- Ejercicio --------------------------
/*
* Preguntar por el numero de mes, del 1 al 12
* de acuerdo al mes desplejar en un alert (o en el DOM)
* la estacion del año.
*
* mes 12,1,2 = invierno
* mes 3,4,5 = primavera
* mes 6,7,8 = verano
* mes 9,10,11 = otoño
*
* usar if-else
* */

const getEstacion = () => {
  const mes = parseInt(document.getElementById("mes").value)

  if ([12, 1, 2].includes(mes))
    document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Invierno";
  else if
    ([3, 4, 5].includes(mes))
    document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Primavera";
  else if
    ([6, 7, 8].includes(mes))
    document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Verano";
  else if
    ([9, 10, 11].includes(mes))
    document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Otoño";
  else
    document.getElementById("estacion").innerHTML = "Ese numero no esta asociado a ninguna estacion";

}


// ---------- Practica ------------
// Refactorizar el ejercicio anterior y utilizar un switch

const getEstacionSwitch = () => {
  const mes = parseInt(document.getElementById("mes").value)

  switch (mes) {
    case 12:
    case 1:
    case 2:
      document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Invierno";
      break;
    case 3:
    case 4:
    case 5:
      document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Primavera";
      break;
    case 6:
    case 7:
    case 8:
      document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Verano";
      break;
    case 9:
    case 10:
    case 11:
      document.getElementById("estacion").innerHTML = "La estacion en que naciste es: Otoño";
      break;
    default:
      document.getElementById("estacion").innerHTML = "Ese numero no esta asociado a ninguna estacion";
  }

}


// /------------------------------- Operador condicional ternario -------------------------------
//
/*
 * Es el unico operador de JavaScript que tiene 3 operando. Generalmente se una 
 * como opcion  a la sentencia if-else.
 *
 * Sintaxis:
 *
 *   condicion ? expresionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa
*/

const subtotal = 1_000;
const pagoTarjetaCredito = true;

// let msj;
// if (pagoTarjetaCredito) msj = subtotal*1.025;
// else msj = subtotal*1;

console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal * 1.025 : subtotal * 1} pesos`)

const edad = 17;
// Se permite el acceso al antro de mala muerte?
console.log(`Acceso ${edad >= 18 ? "Permitido" : "Denegado"}`)
// a los de 17 solo con permiso
console.log(`Acceso ${edad >= 18 ? "Permitido" : edad == 17 ? "Solo con permiso" : "Denegado"}`)


// --------------------------------- Practica ------------------------------
// Refactorizar el ejercicio de saludo con un operador ternario.
const saludoTernario = (numero) => {
  (numero > 1 ? saludoTernario(numero - 1) : {});
  console.log("Saludo " + numero);
}

saludoTernario(10);


