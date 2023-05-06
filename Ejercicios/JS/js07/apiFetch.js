console.log("Session 07 API fetch")

/*
* La API fetch nos ayuda a acceder y manipular peticiones HTTP.
* Proporciona una forma logica y facil de obtener de recursos de la
* red de manera ASINCRONA.
*
* Sintaxis
* solicitud get
*
* fetch(url)
*  .then()
*  .catch();
* */

const url = "https://fakestoreapi.com/products";

const getProducts = (httpUrl) => {
  fetch(httpUrl)
    .then(result => {
      console.log("Respuesta: " + result.status);
      return result.json(); // conversion de JSON a Objeto
    })
    .then((productsObj) => {
      // console.log(productsObj);
      console.log(productsObj[0].title)
      productsObj.forEach(obj => console.log(obj.title));
    })
    .catch(error => console.log(error));
}

// getProducts(url);


// -------------------------- Consumir Fetch usando async-await
const getProductsWithAwait = async (httpUrl) => {

  try {
    const productsJson = await fetch(httpUrl);
    const products = await productsJson.json(); // Conversion JSON a objeto
    console.log(products);

    localStorage.setItem("mis-productos", JSON.stringify(products)) // convertir a json

    products.forEach(obj => console.log(obj.title))
  } catch (error) {
    console.error(error);
  }

};

// getProductsWithAwait(url);

// ---------------------------- Realizar una solicitud POST -----------------------------

const postUser = (url, userData) => {
  // fetch.then(() => {}).catch(() => {});
  fetch(url, {
    method: 'POST', // PUT o DELETE
    body: JSON.stringify(userData), // datos del usuario, conversion de OBJ a JSON
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    // .then(register => console.log(register.createdAt)) // Created at hace que solo devuelva la fecha de la petiecion
    .then(register => console.log(register))
    .catch(error => console.error(error))
}

const user = {
  name: "El Ivan",
  job: "leader"
}

const urlPOST = "https://reqres.in/api/users";

postUser(urlPOST, user)
