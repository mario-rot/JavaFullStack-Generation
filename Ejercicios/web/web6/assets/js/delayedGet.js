let lastUpdate = new Date();
let updatesCount = 0;
let users;
const httpUrl = 'https://reqres.in/api/users?delay=3';

const getUsersFromReqres = async (httpUrl) => {

  try {
    const usersJson = await fetch(httpUrl);
    users = await usersJson.json(); // Conversion JSON a objeto

    localStorage.setItem("reqresUsers", JSON.stringify(users)) // convertir a json

    // users.forEach(obj => console.log(obj.title))
    loadElements(users.data);

  } catch (error) {
    console.error(error);
  }

};

const recoverData = () => {
  const timeDiff = Math.floor((Math.abs(lastUpdate - new Date()) / 1000) / 60);
  if (updatesCount === 0 || timeDiff > 3) {
    console.log("Time diff greater then 3 minutes");
    getUsersFromReqres(httpUrl);
    lastUpdate = new Date();
    updatesCount += 1;
  } else {
    console.log("Time diff lower than 3 minutes");
    // users = localStorage.getItem("reqresUsers");
    const usersObject = JSON.parse(localStorage.reqresUsers).data
    loadElements(usersObject);
  }

}


const loadElements = (data) => {
  // console.log("New element ", data);
  const cards = fitDataToCards(data);
  let cardNum = 0;

  for (let card of cards) {
    ++cardNum;
    // console.log(document.getElementById(`card-${cardNum}`))
    document.getElementById(`card-${cardNum}`).innerHTML = card;
  }

};


const fitDataToCards = (usersObject) => {
  const cards = [];
  for (let user in usersObject) {
    console.log
    cards.push(`<div class="card" style="width: 18rem;">
  <img src="${usersObject[user].avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${usersObject[user].first_name}</h5>
      </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Last Name: ${usersObject[user].last_name}</li>
    <li class="list-group-item">ID: ${usersObject[user].id}</li>
    <li class="list-group-item">Email: ${usersObject[user].email}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
    )
  }
  return cards;
};

// newElement();

// const changeColor = (color) => {
//   const refIntro = document.getElementById("noticias");
//   refIntro.style.color = color;
// }

// changeColor("red");

// // Agregar a un elemento un border
// // .style-border
// // .style.border = thick solid #000ff;

// const changeBorder = (color) => {
//   const refIntro = document.getElementById("noticias");
//   refIntro.style.border = `thick solid ${color}`;
// }
// changeBorder("blue")


