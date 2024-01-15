
document.addEventListener('DOMContentLoaded', function () {
    // Call the function to load questions when the page loads
    
    document.querySelector('#loadJsonButton').addEventListener('click', loadUserJson);
    window.addEventListener('load', loadQuestions);
});
let currentTopic = 0;
let currentQuestion = 1;
let currentQuestionMap = {};
let questionsData = {}; // JSON data loaded from the file
let selectedOption = null;
let madeQuestions = {}
let currentOptionsSort = [];

// Add an event listener to the "Load JSON" button


function loadUserJson() {
    const fileInput = document.querySelector('#jsonFileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            try {
                const userJson = JSON.parse(e.target.result);
                questionsData = userJson; // Update questionsData with user-provided JSON
                for (let k in questionsData){
                    madeQuestions[k] = []
                }
                showQuestion();
            } catch (error) {
                console.error('Error parsing JSON:', error);
                alert('Invalid JSON format. Please provide a valid JSON file.');
            }
        };

        reader.readAsText(file);
    } else {
        alert('Please select a JSON file to load.');
    }
}


// Function to load questions from a JSON file (replace 'questions.json' with your file path)
function loadQuestions() {
    fetch("./CVQuestions.json")
        .then((response) => response.json())
        .then((data) => {
            questionsData = data;
            for (let k in questionsData){
                    madeQuestions[k] = []
                }
            showQuestion();

            // Add event listeners here
            document.querySelector('.add').addEventListener('click', sendAnswer);
            document.querySelector('.continue').addEventListener('click', nextQuestion);
        })
        .catch((error) => console.error(error));
}

function showQuestion() {
    let testQ = [];
    console.log(madeQuestions)
    for (let el in questionsData){
    // console.log(`madeQuestions ${madeQuestions[el].toSorted()}`)
    // console.log(`questionsData ${Object.keys(questionsData[el]).toSorted()}`)
    testQ.push(madeQuestions[el].toSorted().equals(Object.keys(questionsData[el]).toSorted()))
  }
  console.log(`TestQ ${testQ}`)
  console.log(`TestQ Length ${testQ.filter(x => x == true).length}`)
  console.log(`QD Lenght ${Object.keys(questionsData).length}`)
   if (testQ.filter(x => x == true).length == Object.keys(questionsData).length){
            // Quiz completed
            alert('Quiz completed!');
            console.log("Quiz completed!")
            tempAlert('Quiz completed!',5000)
            // resetQuiz();
  } else {
    let randomTopic = getRandomInt(0,Object.keys(questionsData).length)
    currentTopic = Object.keys(questionsData)[randomTopic];
    console.log(currentTopic)
    const topicData = questionsData[currentTopic];
    if (topicData) {
        let randomQuestion = getRandomInt(0, Object.keys(topicData).length) ;
        console.log(`Random ${randomQuestion}`)
        currentQuestion = Object.keys(topicData)[randomQuestion]
        console.log(Object.keys(topicData)[0])
        console.log(currentQuestion)
        if (!madeQuestions[currentTopic].includes(parseInt(currentQuestion))) {
        madeQuestions[currentTopic].push(parseInt(currentQuestion))
        const [question, options, correctAnswerIndexes, image] = topicData[currentQuestion];
        console.log(question)
        const topicElement = document.querySelector('.topic');
        const questionElement = document.querySelector('.question');
        const optionsElement = document.querySelector('.options');
        const questionImageElement = document.getElementById('questionImage'); // Get the img element
        currentOptionsSort = Array.from(options);
        shuffleArray(currentOptionsSort);
      //   console.log(options);
      // console.log(currentOptionsSort)
        let indexModOptions = options.map(e => currentOptionsSort.findIndex(x => x == e))
        let indexOptions = options.map(e => options.findIndex(x => x == e))
        currentQuestionMap = convertToObj(indexOptions, indexModOptions)
         
        topicElement.textContent = `Topic: ${Object.keys(questionsData)[randomTopic]}`;
        questionElement.textContent = question;
        optionsElement.innerHTML = ''; // Clear previous options

        if (image) {
            // If there is an image available, set the src attribute
            questionImageElement.src = image;
            questionImageElement.style.display = 'block'; // Show the image element
        } else {
            // If no image, clear the src attribute and hide the image element
            questionImageElement.src = '';
            questionImageElement.style.display = 'none';
        }

        currentOptionsSort.forEach((option, index) => {
            // console.log(option)
            // console.log(index)
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox'; // Change to checkbox
            input.name = 'option'; // Use the same name for all checkboxes
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${String.fromCharCode(97 + index)}) ${option}`));

            optionsElement.appendChild(label);
        });

        selectedOption = null;
      } else {
        showQuestion();
      }
      
    }
  }
}

// Function to handle the "Send" button click
function sendAnswer() {
    const selectedCheckboxes = document.querySelectorAll('input[name="option"]:checked');
    // const allAnswers = questionsData[currentTopic][currentQuestion][1];
    const allAnswers = currentOptionsSort;
    let correctAnswers = questionsData[currentTopic][currentQuestion][2]; 
   // console.log(correctAnswers)
  // console.log(currentQuestionMap)
    correctAnswers = correctAnswers.map(x => currentQuestionMap[x]); 
    // console.log(`Correct Answers : ${correctAnswers}`)
    const done = [];

    if (selectedCheckboxes.length > 0) {
        selectedCheckboxes.forEach((selectedCheckbox) => {
            
            const selectedValue = parseInt(indexOfMatch(allAnswers, selectedCheckbox.value)[0]);
            // console.log(`Selected value ${selectedValue}`)
            // console.log(correctAnswers)
            if (correctAnswers.includes(selectedValue)) {
                // Correct answer
                selectedCheckbox.parentElement.style.backgroundColor = 'green';
                // Highlight correct answer(s) in blue
                done.push(selectedCheckbox.value)

                correctAnswers.forEach((correctAnswer) => {
                    const labels = document.querySelectorAll('.options label');
                    console.log(allAnswers[correctAnswer])
                    console.log(labels)
                        labels.forEach((label) => {
                            if (label.textContent.includes(allAnswers[correctAnswer]) && !done.includes(allAnswers[correctAnswer])) {
                                label.style.backgroundColor = 'blue';
                            }
                        });
                });
            } else {
                // Incorrect answer
                selectedCheckbox.parentElement.style.backgroundColor = 'red';

                // Highlight correct answer(s) in blue
                correctAnswers.forEach((correctAnswer) => {
                    const labels = document.querySelectorAll('.options label');
                    console.log(allAnswers[correctAnswer])
                    console.log(labels)
                        labels.forEach((label) => {
                            if (label.textContent.includes(allAnswers[correctAnswer])) {
                                label.style.backgroundColor = 'blue';
                            }
                        });
                    
                });
            }
        });

        // Show the "Continue" button
        const continueButton = document.querySelector('.continue');
        continueButton.style.display = 'block';
        continueButton.addEventListener('click', nextQuestion);
    } else {
        alert('Please select an option before sending.');
    }
}


function indexOfMatch(arr1, arr2) {
    const matchIndex = []
    for (const el in arr1) {
        if (arr2.includes(arr1[el])) {
            matchIndex.push(el)
        }
    }
    return matchIndex
}




// Function to handle the "Continue" button click
function nextQuestion() {
    currentQuestion++;
    const continueButton = document.querySelector('.continue');
    continueButton.style.display = 'none';
    showQuestion();
}

// Function to reset the quiz
function resetQuiz() {
    currentTopic = 0;
    currentQuestion = 1;
    questionsData = {};
    selectedOption = null;
    showQuestion(); // <-- Add parentheses for the function call
}


function myAlert(msg,title,width,height,timeout) {
    var myWindow = window.open("", "",`width=${width},height=${height},left=${(window.outerWidth/2-width/2)},top=0`); //open a new popup at the top height and middle width of the current window
    myWindow.document.write(`<center id="msg">`+msg+`</center>`); //write the message you want to display
    myWindow.document.title = title; //write the title of the alert box
    setTimeout(function(){
        myWindow.close(); //close the popup
    },timeout||3000) //in 3 secondes (3000 milliseconds)
}

function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:20%;left:40%;background-color:white;font-size:20px;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;
    // if the argument is the same array, we can be sure the contents are same as well
    if(array === this)
        return true;
    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

// Checking if the array lengths are same 
// and none of the array is empty
function convertToObj(a, b) {
    if (a.length != b.length || 
        a.length == 0 || 
        b.length == 0) {
        return null;
    }
 
    // Using Object.assign method
    return Object.assign(...a.map((k, i) =>({ 
                          [k]: b[i] })))
}
