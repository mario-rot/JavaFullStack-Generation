const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.getElementById('name'); // Getting element by ID
const $blog = document.getElementById('blog');// Getting element by ID
const $location = document.getElementById('location');// Getting element by ID

async function displayUser(username) {
  $name.innerHTML = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json() // Turning response into an object and assigning it to a data variable
  $name.textContent = `${data.name}`;
  $blog.textContent = `${data.blog}`;
  $location.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
