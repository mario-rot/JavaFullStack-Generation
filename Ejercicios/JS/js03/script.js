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




