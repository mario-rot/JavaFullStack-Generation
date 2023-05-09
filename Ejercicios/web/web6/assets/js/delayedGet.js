let lastUpdate = new Date();
let updatesCount = 0;
let users;
const httpUrl = 'https://reqres.in/api/users?delay=3';

const spinner = document.getElementById("spinner")
spinner.innerHTML = `<button class="btn btn-primary my-4" type="button" disabled>
   <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
   Loading users...
 </button>`;
spinner.style.display = "none";



const getUsersFromReqres = async (httpUrl) => {
  try {
    spinner.style.display = "inline";
    const usersJson = await fetch(httpUrl);
    users = await usersJson.json();
    users = randomizeObject(users.data);

    localStorage.setItem("reqresUsers", JSON.stringify(users))

    spinner.style.display = "none";
    loadElements(users);

  } catch (error) {
    console.error(error);
  }

};

const recoverData = () => {
  const timeTreshold = 1;
  const timeDiff = Math.floor((Math.abs(lastUpdate - new Date()) / 1000) / 60);

  if (updatesCount === 0 || timeDiff >= timeTreshold) {
    console.log(`Time diff greater than ${timeTreshold} minutes or first iteration - Getting data from the API`);
    if (updatesCount > 0)
      document.getElementById("cards").remove()
    getUsersFromReqres(httpUrl);
    lastUpdate = new Date();
    updatesCount += 1;
  } else {
    console.log(`Time diff lower than ${timeTreshold} minutes - Getting data from local storage`);
    spinner.style.display = "inline"
    document.getElementById("cards").remove()
    // users = localStorage.getItem("reqresUsers");
    const usersObject = JSON.parse(localStorage.reqresUsers);
    loadElements(usersObject);
    spinner.style.display = "none";
  }

}


const loadElements = (data) => {
  // console.log("New element ", data);
  let cardsCount = 0;
  const cards = fitDataToCards(data);
  const cardsDiv = document.createElement("div");
  cardsDiv.setAttribute("class", "row justify-content-center")
  cardsDiv.setAttribute("id", "cards");
  document.getElementById("mainCont").appendChild(cardsDiv)

  for (let card of cards) {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "col-12 col-md-6 col-lg-4 my-3");
    cardDiv.setAttribute("id", `card-${++cardsCount}`);
    document.getElementById("cards").appendChild(cardDiv);
    document.getElementById(`card-${cardsCount}`).innerHTML = card;
  }

};


const fitDataToCards = (usersObject) => {
  const cards = [];
  for (let user in usersObject) {
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
</div>`
    )
  }
  return cards;
};


const randomizeObject = (obj) => {
  const objKeys = Object.keys(obj).map(i => parseInt(i))
  const reOrdObj = objKeys.sort(() => Math.random() - 0.5);
  const shuffledObj = {};

  for (key of objKeys) {
    shuffledObj[parseInt(reOrdObj[key])] = obj[key];
  }
  return shuffledObj;
}


// const loadSpinners = (spinnersNum) => {
//   for (let i = 1; i <= spinnersNum; i++) {
//     document.getElementById(`card-${i}`).innerHTML = `<button class="btn btn-primary" type="button" disabled>
//   <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//   Loading user...
// </button>`;
//   }

// }

// getUsersFromReqres(httpUrl);


