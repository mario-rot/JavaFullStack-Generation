console.log("Session web1");

function changeGreeting(){
  console.log("Button is pushed")
  // get client name
  const clientName =  getNameOfClient();
  // Get reference label h1
  const greetingReference = getReferenceOfIdGreeting();
  // TODO Change the greeting
  greetingReference.innerHTML = "Hola " + clientName;
}

function getNameOfClient(){
  const clientName = prompt("Write your name here:");
  return clientName
}

function getReferenceOfIdGreeting(){
  return document.getElementById("greeting");
}
