let isLoggedIn= localStorage.getItem('isLoggedIn') ;
function getData(){
    var username = document.getElementById('actualFullName');
    var email = document.getElementById('actualEmail');
    var phone = document.getElementById('actualPhone');
    var gender = document.getElementById('actualGender');
   

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    username.innerHTML =  user.Username
    email.innerHTML = user.regEmail
    phone.innerHTML = user.phone
    gender.innerHTML =  user.gender
    document.getElementById('profileFullNameInput').value = user.Username;
    document.getElementById('profileEmailInput').value = user.regEmail;
    document.getElementById('phone').value = user.phone;
    document.getElementById('gender').value = user.gender;
    
    
}
getData();


function updateNavbar() {
    if (isLoggedIn) {
        document.getElementById('test').style.display = 'block';
        document.getElementById('userProfile').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
        document.getElementById('log').style.display = 'none';
        document.getElementById('join').style.display = 'none';
    } else {
        document.getElementById('test').style.display = 'none';
        document.getElementById('userProfile').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('log').style.display = 'block';
        document.getElementById('join').style.display = 'block';
    }
}

function home() {
    window.location.href = '../../suhaib/home.html';
    
}

function profile() {
    window.location.href='../../Saja/profile/profile.html'
}


function testhere() {
    window.location.href='../sally/test-here/testHere.html'
}

function Register() {
    window.location.href = '../toqa/Login&SignUp/Login.html?show=signup';
}

function about() {
    window.location.href = '../../toqa/About Us/About Us.html';
    
}
function aboutT() {
    window.location.href = '../../toqa/About Us/About Us.html#Q';
    
}
function Contact() {
    window.location.href = '../../Ammar/Ammars/ContactUs/contactUs.html';
    
}


function logout() {
    alert('Logged out successfully');
    localStorage.setItem('isLoggedIn', 'false'); 
    localStorage.removeItem('user')

    window.location.href = '../../suhaib/home.html';
    updateNavbar();
}



window.onload = updateNavbar;

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
function saveChanges() {
    const fullName = document.getElementById('profileFullNameInput').value;
    const phone = document.getElementById('phone').value;
    const user = JSON.parse(localStorage.getItem("user"));
    user.Username = fullName
    user.phone =phone
    let regEmail = user.regEmail
    console.log(regEmail)
    
    
    const users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    const userIndex = users.findIndex(user => user.regEmail === regEmail);
    if (userIndex !== -1) {
        users[userIndex].Username = fullName;
        users[userIndex].phone = phone;
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem('user',JSON.stringify(user))
    getData();
    alert('Profile updated successfully!');
    document.querySelector('#editProfileModal .btn-close').click();
}

// // Load data when the page opens
// document.addEventListener('DOMContentLoaded', updateProfile);

// Preview the image on change
function previewImage(event) {
    const imageFile = event.target.files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user.img = imageFile);
        
    //     let regEmail = user.regEmail
        
        
    //     const users = JSON.parse(localStorage.getItem("users"));
    //    ;
    //     const userIndex = users.findIndex(user => user.regEmail === regEmail);
    //     if (userIndex !== -1) {
    //         users[userIndex].Username = fullName;
    //         users[userIndex].phone = phone;
    //     }
    //     localStorage.setItem("users", JSON.stringify(users));
    //     localStorage.setItem('user',JSON.stringify(user))
        
    }
}
// //testing 

// const quizResults = {
//     iq: 60,
//     english: 70,
//     technical: 92
// };

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

