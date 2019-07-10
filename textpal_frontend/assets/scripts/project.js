// selecting necessary elements
const userInput = document.querySelector('textarea');
const artboard = document.querySelector('.artboard');
const fontSizeInput = document.querySelector('.font_size');
const fontColorInput = document.querySelector('.font_color');
const bgColorInput = document.querySelector('.bg_color');

// *selecting* tools
const selectTool = document.querySelector('.select_tool');
const cursorTool = document.querySelector('.cursor_tool');

// *setting* tool vars and their default values
let fontFace;
let fontColor;
let fontSize = 20;
let backgroundColor = '#fff';

let selectedText;
let selectedTextFontSize;
let selectedTextFontColor;

function printUserInput() {
  selectedText.textContent = userInput.value;
}

function getStyle(prop) {
  let el = window.getComputedStyle(selectedText);
  let style = el.getPropertyValue(prop);
  return style;
}

function updateValues(e) {
  updateSelectedText(e);
  updateFontSize();
  updateTextInput();
  updateFontColor();
}

function updateSelectedText(e) {
  selectedText = e.target;
}

function updateFontSize() {
  let size = getStyle('font-size');
  fontSizeInput.value = parseInt(size);
}

function updateTextInput() {
  let text = selectedText.textContent;
  userInput.value = text;
}

function updateFontColor() {
  let fontColor = getStyle('color');
  fontColorInput.value = fontColor;
  console.log(`font color: ${fontColor}`);
}

function setFontSize(e) {
  let value = e.target.value;
  selectedText.style.fontSize = `${value}px`;
}

function resetTextListeners() {
  let children = artboard.childNodes;

  for (let child of children) {
    let newchild = child.cloneNode(true);
    artboard.replaceChild(newchild, child);
  }
}

function setToolToSelect(e) {
  resetTextListeners();

  artboard.childNodes.forEach(child => {
    child.addEventListener('click', e => updateValues(e));
  });

  artboard.style.cursor = "url('./assets/icons/select_tool.svg'), auto";
}

function setFontColor(e) {
  let color = e.target.value;
  selectedText.style.color = color;
}

function init() {
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.textContent = 'Hi there';
  h2.textContent = 'Enjoy creating on our platform';
  artboard.append(h1, h2);

  selectedText = h1;

  // tool event listeners
  selectTool.addEventListener('click', e => setToolToSelect(e));
  cursorTool.addEventListener('click', () => {
    resetTextListeners();
  });

  // input event listeners
  userInput.addEventListener('keyup', printUserInput);
  fontSizeInput.addEventListener('change', e => setFontSize(e));
  fontColorInput.addEventListener('change', e => setFontColor(e));
}

init();

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
