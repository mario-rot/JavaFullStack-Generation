console.log("JS07 - promesas");

/*
* Una promesa (promise) es un objeto que representa la terminacion o fracaso 
* de una operacion  asincrona.
*
* Para crear una promesa se una el construnctor new Promise();
* */

// const pinkiPromise = new Promise(/*funcion de callback*/)
const pinkiPromise = new Promise((fncCallBackResolve, fncCallBackReject) => {
  const menorEdad = true;

  if (menorEdad)
    fncCallBackResolve("Hay que estar siempre juntos")
  else
    fncCallBackReject("No te conozco")

});

// consumir las promesas
// usando los metodos then, catch, y finally

console.log("Antes de consumir la promesa");
// pinkiPromise.then(fncCallBack).catch(fcnCallBack);
pinkiPromise
  .then((response) => console.log('Promesa Resuelta ' + response))
  .catch((error) => console.error("Tu pormesa fue rechazada " + error));

console.log("Despues de consumir la promesa")

// ---- Una promesa que reciba dos numeros ay b y los divida
// en caso de que b sea cero, me envie un rechazo diciendome por que no se
// puede realizar la division

const divisionAB = new Promise((fncCallBackResolve, fncCallBackReject) => {
  let a = 10;
  let b = 5;

  if (b !== 0)
    fncCallBackResolve(a / b)
  else
    fncCallBackReject("El valor 0 de - b - vuelve la operacion indeterminada.")

});

// consumir las promesas
// usando los metodos then, catch, y finally

console.log("Antes de consumir la promesa");
// pinkiPromise.then(fncCallBack).catch(fcnCallBack);
divisionAB
  .then((response) => console.log('El resultado de la division es: ' + response))
  .catch((error) => console.error("Error: " + error));

console.log("Despues de consumir la promesa")

// ---------------- Haciendo la division con parametros -------------------------

const divisionConParametros = (a, b) => {
  const myPromise = new Promise((resolve, reject) => {
    if (b === 0)
      reject("No se puede realizar una division por cero");
    // setTimeout(() => reject("Division por cero!"), 5000);
    else
      resolve(a / b)
  });
  return myPromise;
}

divisionConParametros(3, 4)
  .then((response) => {
    console.log(response);
    return response + 10;
  }) // 0.75
  .then((mas10Unidades) => console.log(mas10Unidades))//10.75
  .catch((error) => console.log(error))
  .finally(() => console.log("Se termino la division"))


divisionConParametros(3, 0)
  .then((response) => console.log(response))
  .catch((error) => console.log(error)) // No se puede realizar una division por cero


// ---------- Consumir las promesas con async y await

const realizarDivisionSincrona = async () => {
  console.log("<------------- Resolviendo divisiones ------------------>")
  const resultado = await divisionConParametros(20, 4);
  console.log(resultado)
  console.log(resultado + 100)
  // const resultadoErroneo = await divisionConParametros(20,0);
  // console.log(resultadoErroneo)
  console.log("<------------- Terminando divisiones ------------------->")
}

realizarDivisionSincrona();


// ------------ Manejo de excepciones con try y catch
/*
 Sintaxis
  try{

  } catch( error ){
    
  }
*/

const manejoDeExcepciones = async () => {
  console.log("<-------- Resolviendo divisiones usando try y catch ---------->")
  try {
    const resultadoErroneo = await divisionConParametros(20, 0);
    console.log(resultadoErroneo);
  } catch (error) {
    console.error("Async-Await " + error)
  }
  console.log("<------ Terminando divisiones usando try y catch -------->")
}

manejoDeExcepciones();


// ---------------------------------------
// Promise.resolve();

const promesaRapida = Promise.resolve(123);

// --------- Resolver (consumir) con .then
const consumirConThen = () => {
  promesaRapida.then((response) => console.log("Promesa resuelta (then)" + response));
  console.log(456)
}

consumirConThen();

// --------- Resolver con Async-Away

const consumirConAwait = async () => {
  console.log("Consumir con await " + await promesaRapida);
  console.log(789)
}

consumirConAwait()
