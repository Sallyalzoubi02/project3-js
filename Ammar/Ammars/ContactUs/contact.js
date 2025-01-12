const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const form = document.getElementById('form');


form.addEventListener('input', function () {
 
  const username = document.getElementById('username').value;
  const usernameError = document.getElementById('usernameError');
  const usernameRegex = /^[a-zA-Z]+$/;
  usernameError.textContent = usernameRegex.test(username) ? '' : 'Only letters are allowed';

  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailError.textContent = emailRegex.test(email) ? '' : 'Enter a valid email address';


  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');
  const phoneRegex = /^[0-9]+$/;
  phoneError.textContent = phoneRegex.test(phone) ? '' : 'Phone number must contain only numbers';

  const message = document.getElementById('message').value;
  const messageError = document.getElementById('messageError');
  messageError.textContent = message.trim() === '' ? 'Message cannot be empty' : '';
});


form.addEventListener('submit', function (e) {
  e.preventDefault(); 


  if (
    document.getElementById('usernameError').textContent ||
    document.getElementById('emailError').textContent ||
    document.getElementById('phoneError').textContent ||
    document.getElementById('messageError').textContent
  ) {
    alert('Please fix the errors in the form before submitting.');
    return;
  }


  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;


  const formData = {
    username: username,
    email: email,
    phone: phone,
    message: message,
  };

 
  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form submitted and data saved successfully!');
 
  form.reset();
});
