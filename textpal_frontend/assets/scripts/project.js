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
