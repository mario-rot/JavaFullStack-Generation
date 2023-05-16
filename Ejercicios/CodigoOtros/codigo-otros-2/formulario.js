// Se adapto con un punto para llamarlo por clase y se puso el nombre de la clase
const formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {
  e.preventDefault(); // se agrego Default para que  no se haga refresh a la pagina 

  const n = formulario.elements[0]
  const age = formulario.elements[1]
  const na = formulario.elements[2]

  const nombre = n.value
  const edad = age.value

  const i = na.selectedIndex
  const nacionalidad = na.options[i].value

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}


// Se comentaron estas lineas que agregan un boton innecesario
//
// const botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// const corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  const lista = document.getElementById("lista-de-invitados")

  const elementoLista = document.createElement("div")
  // Se cambio el metodo .added por .add, ya que .added no existe
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  // Se comentaron las lineas de abajo que solo hacia que el nombre se pusiera 2 veces
  // const spanNombre = document.createElement("span")
  // const inputNombre = document.createElement("input")
  // const espacio = document.createElement("br")
  // spanNombre.textContent = "Nombre: "
  // inputNombre.value = nombre
  // elementoLista.appendChild(spanNombre)
  // elementoLista.appendChild(inputNombre)
  // elementoLista.appendChild(espacio)


  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span")
    const inputNombre = document.createElement("input")
    const espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  const botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  const corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}
