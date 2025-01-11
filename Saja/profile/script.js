// function previewImage(event) {
//     const image = document.getElementById('profileImage');
//     const file = event.target.files[0];
    
//     // Convert the image to Base64
//     const reader = new FileReader();
//     reader.onloadend = function() {
//         // Store the Base64 image in Local Storage
//         localStorage.setItem('profileImage', reader.result); // Save the image

//         // Display the image in the profile
//         image.src = reader.result;
//     }
//     if (file) {
//         reader.readAsDataURL(file); // Start reading the file as a Base64 string
//     }
// }

// function saveChanges() {
//     // Get the values entered by the user
//     var fullName = document.getElementById('profileFullNameInput').value;
//     var email = document.getElementById('profileEmailInput').value;
//     var phone = document.getElementById('phone').value;
//     var location = document.getElementById('location').value;
//     var gender = document.getElementById('gender').value;

//     // Update the profile details with the new values
//     document.getElementById('profileFullName').innerText = fullName; // Update sidebar
//     document.getElementById('profileEmail').innerText = email; // Update sidebar
//     document.getElementById('actualFullName').innerText = fullName; // Update details card
//     document.getElementById('actualEmail').innerText = email; // Update details card
//     document.getElementById('actualPhone').innerText = phone;
//     document.getElementById('actualLocation').innerText = location;
//     document.getElementById('actualGender').innerText = gender === "male" ? "Male" : "Female";

//     // Optionally close the modal after saving
//     $('#editProfileModal').modal('hide');
// }

// function loadProfile() {
//     // Check if the data exists in Local Storage
//     if (localStorage.getItem('fullName')) {
//         document.getElementById('actualFullName').innerText = localStorage.getItem('fullName');
//         document.getElementById('profileFullName').innerText = localStorage.getItem('fullName');
//     }
//     if (localStorage.getItem('email')) {
//         document.getElementById('actualEmail').innerText = localStorage.getItem('email');
//         document.getElementById('profileEmail').innerText = localStorage.getItem('email');
//     }
//     if (localStorage.getItem('phone')) {
//         document.getElementById('actualPhone').innerText = localStorage.getItem('phone');
//     }
//     if (localStorage.getItem('location')) {
//         document.getElementById('actualLocation').innerText = localStorage.getItem('location');
//     }
//     if (localStorage.getItem('gender')) {
//         document.getElementById('actualGender').innerText = localStorage.getItem('gender') === "male" ? "Male" : "Female";
//     }
//     if (localStorage.getItem('profileImage')) {
//         document.getElementById('profileImage').src = localStorage.getItem('profileImage');
//     }
// }

// // Save changes to Local Storage
// function saveChanges() {
//     const fullName = document.getElementById('profileFullNameInput').value;
//     const email = document.getElementById('profileEmailInput').value;
//     const phone = document.getElementById('phone').value;
//     const location = document.getElementById('location').value;
//     const gender = document.getElementById('gender').value;

//     // Store the data in Local Storage
//     localStorage.setItem('profileData', JSON.stringify({ fullName, email, phone, location, gender }));

//     // Update the current display
//     updateProfile();
//     alert('Profile updated successfully!');
//     // Close the modal
//     document.querySelector('#editProfileModal .btn-close').click();
// }

// // Update page data from Local Storage
// function updateProfile() {
//     const storedData = localStorage.getItem('profileData');
//     if (storedData) {
//         const { fullName, email, phone, location, gender } = JSON.parse(storedData);
//         document.getElementById('actualFullName').textContent = fullName;
//         document.getElementById('profileFullName').textContent = fullName;
//         document.getElementById('actualEmail').textContent = email;
//         document.getElementById('profileEmail').textContent = email;
//         document.getElementById('actualPhone').textContent = phone;
//         document.getElementById('actualLocation').textContent = location;
//         document.getElementById('actualGender').textContent = gender.charAt(0).toUpperCase() + gender.slice(1);
//     }
// }

// // Load data when the page opens
// document.addEventListener('DOMContentLoaded', updateProfile);

// // Preview the image on change
// function previewImage(event) {
//     const imageFile = event.target.files[0];
//     if (imageFile) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             document.getElementById('profileImage').src = e.target.result;
//         };
//         reader.readAsDataURL(imageFile);
//     }
// }
// //testing 

// // const quizResults = {
// //     iq: 60,
// //     english: 70,
// //     technical: 92
// // };

// // Store quiz results in localStorage
// localStorage.setItem('quizResults', JSON.stringify(quizResults));

// // Retrieve quiz results from localStorage
// const storedResults = localStorage.getItem('quizResults');

// if (storedResults) {
//     const results = JSON.parse(storedResults);

//     // Update test results on the page
//     document.querySelector('.circle:nth-child(1) span').textContent = `${results.iq}%`;
//     document.querySelector('.circle:nth-child(1) p').textContent = "IQ Test";

//     document.querySelector('.circle:nth-child(2) span').textContent = `${results.english}%`;
//     document.querySelector('.circle:nth-child(2) p').textContent = "English Test";

//     document.querySelector('.circle:nth-child(3) span').textContent = `${results.technical}%`;
//     document.querySelector('.circle:nth-child(3) p').textContent = "Technical Test";
// }


/////////////////////////////////////////////////
console.log(sessionStorage.getItem("score_eng"));