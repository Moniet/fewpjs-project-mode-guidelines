// selecting elements
const userInput = document.querySelector('textarea');
const artboard = document.querySelector('.artboard');

let fontFace;
let fontColor;
let fontSize = 20;
let fontType1 = 'h1';
let fontType2 = 'p';
let backgroundColor = '#fff';


function printUserInput() {
  const userText = userInput.value;
  const el = document.createElement(fontType1);

  artboard.textContent = userText;
  artboard.appendChild(el);
}

userInput.addEventListener('keyup', printUserInput);


document.addEventListener("DOMContentLoaded", function() {
  if(localStorage['username']) {
    alert("Welcome to the world of Text Pal")
  } else {
    alert("You are not logged in")
    window.location.href = "/textpal_frontend/signin.html";
  }
})

// ADD THIS TO LOGOUT BUTTON
// LOGOUTBUTTON.addEventListener("click", e =>{
//   delete localStorage['username']
//   alert("Logged out")
//   window.location.href = "/textpal_frontend/signin.html";
// })