const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");
const signupForm = document.getElementById('signupForm');

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});


    signupForm.addEventListener('input', function () {

    const regName = document.getElementById('Username').value;
    const regNameError = document.getElementById('regUserError');
    regNameError.textContent = /^[a-zA-Z]+$/.test(regName) ? '' : 'Numbers are not allowed ';
    
    const email = document.getElementById('regEmail').value;
    const emailError = document.getElementById('regEmailError');
    emailError.textContent = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? '' : 'The e-mail is not valid';

    const regPhone = document.getElementById('phone').value;
    const regPhoneError = document.getElementById('regPhoneError');
    regPhoneError.textContent = /^[0-9]+$/.test(regPhone) ? '' : 'Numbers only allowed';

   const password = document.getElementById('password')
   const regpasswordError = document.getElementById('regpasswordError')
   if (password.value.length < 6) {
    regpasswordError.textContent = 'Password must be at least 6 characters';
} else if (!/[A-Z]/.test(password.value)) {
    regpasswordError.textContent = 'Password must have at least one uppercase English letter';
} else {
    regpasswordError.textContent = ''; 

}



    const regConfirmPassword = document.getElementById('regConfirmPassword');
    const regConfirmPasswordError = document.getElementById('regConfirmPasswordError');
    if (regConfirmPassword.value === '') {
        regConfirmPasswordError.textContent = '';
      } else {
        regConfirmPasswordError.textContent = password.value === regConfirmPassword.value ? '' : 'Passwords do not match';
      }
    });
  

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const Username = document.getElementById("Username").value;
    const regEmail = document.getElementById("regEmail").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("male").checked ? 'male' : 'female';

    const newUser = {
        Username: Username,
        regEmail: regEmail,
        password: password,
        phone: phone,
        gender: gender,
    };

    // Retrieve all users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Use forEach to check if the email already exists
    let emailExists = false;
    users.forEach(user => {
        if (user.regEmail === regEmail) {
            emailExists = true; // Set flag if email is found
        }
    });

    if (emailExists) {
        alert("This email is already registered. Please use a different email.");
    } else {
        // Add the new user to the users array and save to localStorage
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please login.");
    }
});


document.getElementById("signinForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const Username = document.getElementById("Lusername").value; // Correct ID for the username field
    const password = document.getElementById("Lpassword").value;

    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user by username
    const user = users.find(user => user.Username === Username);

    if (user) {
        // Check if the password matches
        if (user.password === password) {
            // Save logged-in user to localStorage and redirect
            localStorage.setItem("user", JSON.stringify(user));

            window.localStorage.setItem("isLoggedIn","true");

            window.location.href = "test.html";
        } else {
          localStorage.setItem("isLoggedIn","false")

            alert("Incorrect password");
        }
    } else {
      localStorage.setItem("isLoggedIn","false")

        alert("User not found");
    }
});



let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

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

function showLogin() {
    alert('Login functionality here');
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true'); 
    updateNavbar();
}

function showRegister() {
    alert('Register functionality here');
}

function logout() {
    alert('Logged out successfully');
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false'); 
    updateNavbar();
}

window.onload = updateNavbar;

    

