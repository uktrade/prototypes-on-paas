/* global $ */

/* Reset password - conditions */

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var captial = document.getElementById("captial");
var special = document.getElementById("special");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

   // Validate upper case letters
   var upperCaseLetters = /[A-Z]/g;
   if(myInput.value.match(upperCaseLetters)) {  
     captial.classList.remove("invalid");
     captial.classList.add("valid");
   } else {
    captial.classList.remove("valid");
    captial.classList.add("invalid");
   }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate special chars
  var specialChars = /(?=.*?[#?!@$%^&*-])/g;
  if(myInput.value.match(specialChars)) {  
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  } 
}

/* Show / hide 1st password */

let srPasswordText = document.querySelector("#password-text");
let passwordInput = document.querySelector("#password");
let showPasswordButton = document.querySelector("#show-password");
let toggleText = document.querySelector(".show-text");
let showPasswordText = "Show";
let hidePasswordText = "Hide";

let handleTogglePasswordVisibility = (e) => {
let buttonState = showPasswordButton.getAttribute("aria-checked");

showPasswordButton.setAttribute(
"aria-checked",
buttonState === "false" ? "true" : "false"
);
srPasswordText.innerText =
buttonState === "true" ? "Password hidden" : "Password shown";
passwordInput.type = buttonState === "true" ? "password" : "text";
toggleText.innerText =
buttonState === "true" ? showPasswordText : hidePasswordText;
};

showPasswordButton.addEventListener("click", handleTogglePasswordVisibility);



/* Show / hide 2nd password */

let srPasswordText2 = document.querySelector("#password-text2");
let passwordInput2 = document.querySelector("#password-confirm");
let showConfirmButton = document.querySelector("#show-confirm");
let toggleText2 = document.querySelector(".show-text2");
let showConfirmText = "Show";
let hideConfirmText = "Hide";


let handleToggleConfirmVisibility = (e) => {
  let buttonState2 = showConfirmButton.getAttribute("aria-pressed");
  
  showConfirmButton.setAttribute(
  "aria-pressed",
  buttonState2 === "false" ? "true" : "false"
  );
  srPasswordText2.innerText =
  buttonState2 === "true" ? "Confirm password hidden" : "Confirm password shown";
  passwordInput2.type = buttonState2 === "true" ? "password" : "text";
  toggleText2.innerText =
  buttonState2 === "true" ? showConfirmText : hideConfirmText;
  };
  
  showConfirmButton.addEventListener("click", handleToggleConfirmVisibility);