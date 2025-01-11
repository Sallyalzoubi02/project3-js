// Function to loop through the question options
function displayOption(op, con = 0) {
    let c = ''; // Holder for the HTML elements
    let o = 1; // Counter to assign different IDs for the options
    
    // Loop through the options
    for (const option of op) {
        const escapedOption = escapeHtml(option);
        c += `
        <input type="radio" name="question${con}" id="o${o}" value="${option}" class="card-text mt-4 ms-4 me-2">
        <label for="o${o}">${escapedOption}</label><br>
        `; // Create radio button with a label
        o++; // Increment the ID
    }
    return c; // Return the option tags to the parent.innerHTML
}

function goToTestHere() {
    // Store test status
    sessionStorage.setItem(`${testname}`, "true");

    // Redirect to the testHere page
    window.location.href = '../test-here/testHere.html';
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function displayOptionImg(op, con = 0) {
    let c = ''; // Holder for the HTML elements
    let o = 1; // Counter to assign different IDs for the options
    
    // Loop through the options
    for (const option of op) {
        console.log(option)
        
        c += `
        <input type="radio" name="question${con}" id="o${o}" value="${option}" class="card-text mt-4 ms-4 me-2">
        <label for="o${o}">
            <img src="../../Saja/JSON/${option}" alt="Option ${o}" style="max-width: 200px; display: block;">
        </label><br>
        `; // Create radio button with an image label
        o++; // Increment the ID
    }
    return c; // Return the option tags to the parent.innerHTML
}



let url;
let testname;
let testId = sessionStorage.getItem('testId');

//to now which json file to read 
if (testId == 0) {
    url = '../../Saja/JSON/IQ.json';
    testname = 'iq';
} else if (testId == 1) {
    url = '../../Saja/JSON/English.json';
    testname = 'eng';
} else if (testId == 2) {
    url = '../../Saja/JSON/technical.json';
    testname = 'tech';
}

// Fetch the JSON file
fetch(url) // Relative path from the folder where your JS is located
    .then(response => response.json()) // Parse it to object
    .then(data => {
        let parent = document.getElementById('test'); // Call the parent container
        let counter = 0;
        let ans = []; // Store user answers
        let correctAns =[];

        // Function to Display a question
        function DisplayQuestion() {
            if (counter >= data.questions.length) {
                // Quiz finished
                parent.innerHTML = `
                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title">Quiz Finished</h5><br>
                            <button class="btn btn-green m-5" onclick="goToTestHere()">Finish</button>
                        </div>
                    </div>
                `;
                sessionStorage.setItem(`${testname}ans`, ans);
                sessionStorage.setItem(`${testname}correctAns`, correctAns);
                return;
            }

            


            // Get the current question
            let question = data.questions[counter];
            if(question.image_path){

                parent.innerHTML = `
                <div class="card w-75">
                    <div  id="inertContent"  class="card-body ">
                        <h5  class="card-title">${question.question}</h5><br>
                        <img src="../../Saja/JSON/${question.image_path}" style="max-width: 400px; display: block;">
                        ${displayOptionImg(question.options, counter)}
                        <button class="btn btn-green m-5" id="btn">${counter === data.questions.length - 1 ? 'Submit' : 'Next Question'}</button>
                    </div>
                </div>
            `

            }
            else{parent.innerHTML = `
                <div class="card w-75">
                    <div  id="inertContent"  class="card-body ">
                        <h5  class="card-title">${question.question}</h5><br>
                        ${displayOption(question.options, counter)}
                        <button class="btn btn-green m-5" id="btn">${counter === data.questions.length - 1 ? 'Submit' : 'Next Question'}</button>
                    </div>
                </div>
            `;}

            // Attach event listener to the button
            document.getElementById('btn').addEventListener('click', () => {
                let selectedOption = document.querySelector(`input[name="question${counter}"]:checked`);

                if (selectedOption) {
                    correctAns.push(question.correct_answer)
                    ans.push(selectedOption.value); // Store the selected answer
                    counter++; // Move to the next question
                    DisplayQuestion(); // Re-Display
                    
                } else {
                    alert('Please select an option before proceeding!');
                }
            });

            const inertContent = document.getElementById('inertContent');

                // Add event listeners to the content to prevent copying
                inertContent.addEventListener('mousedown', (e) => {
                    e.preventDefault(); // Prevent selecting
                    inertContent.classList.add('not-allowed-cursor'); // Add cursor style
                });

                // Remove the cursor style after the user releases the mouse button
                inertContent.addEventListener('mouseup', () => {
                    inertContent.classList.remove('not-allowed-cursor'); // Remove cursor style
                });

                // Listen for copy event and prevent copying
                inertContent.addEventListener('copy', (e) => {
                    e.preventDefault(); // Prevent the default copy action
                });
        }

        // Display the first question
        DisplayQuestion();
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });


