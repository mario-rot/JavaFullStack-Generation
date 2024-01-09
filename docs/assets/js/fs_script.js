
document.addEventListener('DOMContentLoaded', function () {
    // Call the function to load questions when the page loads
    
    document.querySelector('#loadJsonButton').addEventListener('click', loadUserJson);
    window.addEventListener('load', loadQuestions);
});
let currentTopic = 0;
let currentQuestion = 1;
let questionsData = {}; // JSON data loaded from the file
let selectedOption = null;


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
    fetch("./questions.json")
        .then((response) => response.json())
        .then((data) => {
            questionsData = data;
            showQuestion();

            // Add event listeners here
            document.querySelector('.add').addEventListener('click', sendAnswer);
            document.querySelector('.continue').addEventListener('click', nextQuestion);
        })
        .catch((error) => console.error(error));
}

function showQuestion() {
    const topicData = questionsData[`Topic${currentTopic + 1}`];
    if (topicData && topicData[currentQuestion]) {
        const [question, options, correctAnswerIndexes, image] = topicData[currentQuestion];
        const topicElement = document.querySelector('.topic');
        const questionElement = document.querySelector('.question');
        const optionsElement = document.querySelector('.options');
        const questionImageElement = document.getElementById('questionImage'); // Get the img element

        topicElement.textContent = `Topic ${currentTopic + 1}`;
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

        options.forEach((option, index) => {
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
        // No more questions in this topic, move to the next topic
        currentTopic++;
        currentQuestion = 1;
        if (currentTopic < Object.keys(questionsData).length) {
            showQuestion();
        } else {
            // Quiz completed
            alert('Quiz completed!');
            resetQuiz();
        }
    }
}

// Function to handle the "Send" button click
function sendAnswer() {
    const selectedCheckboxes = document.querySelectorAll('input[name="option"]:checked');
    const allAnswers = questionsData[`Topic${currentTopic + 1}`][currentQuestion][1]; 
    const correctAnswers = questionsData[`Topic${currentTopic + 1}`][currentQuestion][2]; 
    
    if (selectedCheckboxes.length > 0) {
        selectedCheckboxes.forEach((selectedCheckbox) => {
            
            const selectedValue = parseInt(indexOfMatch(allAnswers, selectedCheckbox.value)[0]);
            console.log(selectedValue)
            console.log(correctAnswers)
            if (correctAnswers.includes(selectedValue)) {
                // Correct answer
                selectedCheckbox.parentElement.style.backgroundColor = 'green';
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


