console.log("JS09 uso de axios");

// const axios = require("axios");

const url = "https://reqres.in/api/users?page=1";
const urlPost = 'https://reqres.in/api/users';

const getUsersFetch = () => {
  fetch(url)
    .then(response => response.json())
    .then(users => { console.log(users) })
    .catch(error => console.log(error));
}

const getUsersAxios = () => {
  axios.get(url)
    .then(users => console.log(users))
    .catch(error => console.log(error))
}

// getUsersAxios(url);

// console.log(" / ---------------------------------------------------------------------------------- /")

const getUsersAxiosAsyncAwait = async () => {

  try {
    const usersJson = await axios.get(url);
    console.log(usersJson.data.data);

  } catch (error) {
    console.error(error);
  }

};

// getUsersAxiosAsyncAwait(url);

// ----------- Hacer una solicitud post

const postUsers = (userData) => {
  axios.post(urlPost, userData)
    .then(response => console.log(response)) // Diferencias 
    .catch(error => console.log(error))
};

const userData = {
  name: "Mario",
  email: "mrio@gmail.com",
  password: "3141592"
}
