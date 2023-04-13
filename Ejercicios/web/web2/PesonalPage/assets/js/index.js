function changeGreeting(){
  // get client name
  const clientName =  getNameOfClient();
  // Get reference label h1
  const greetingReference = getReferenceOfIdGreeting();
  // TODO Change the greeting
  greetingReference.innerHTML = " -----------------------------------   Welcome dear: " + clientName + '   -----------------------------------';
}

function getNameOfClient(){
  const clientName = prompt("Write your name here:");
  return clientName
}
 
function getReferenceOfIdGreeting(){
  return document.getElementById("greeting");
}
