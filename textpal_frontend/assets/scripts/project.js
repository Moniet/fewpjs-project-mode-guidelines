// selecting necessary elements
const userInput = document.querySelector('textarea');
const artboard = document.querySelector('.artboard');
const fontSizeInput = document.querySelector('.font_size');

// *selecting* tools
const selectTool = document.querySelector('.select_tool');
const cursorTool = document.querySelector('.cursor_tool');


// *setting* tool vars and their default values
let fontFace;
let fontColor;
let fontSize = 20;
let fontType1 = 'h1';
let fontType2 = 'p';
let backgroundColor = '#fff';

let selectedText;
let selectedTextFontSize;
let selectedTextFontColor;
let selectedTool = '';

function printUserInput() {
  selectedText.textContent = userInput.value;
}

function updateValues(e) {
  updateSelectedText(e);
  updateFontSize();
  updateTextInput();
}

function updateSelectedText(e) {
  selectedText = e.target;
}

function updateFontSize() {
  let el = window.getComputedStyle(selectedText);
  let size = el.getPropertyValue('font-size');
  fontSizeInput.value = parseInt(size);
}

function updateTextInput() {
  let text = selectedText.textContent;
  userInput.value = text;
}

function setFontSize(e) {
  let value = e.target.value;
  selectedText.style.fontSize = `${value}px`;
}

function resetTextListeners() {
  let children = artboard.childNodes;
  for (let child of children) {
    child.removeEventListener('click', e => updateValues(e), true);
    console.log(child);
  }
}

function setToolToSelect(e) {
  resetTextListeners();

  artboard.childNodes.forEach(child => {
    child.addEventListener('click', e => updateValues(e), true);
  });

  artboard.style.cursor = "url('./assets/icons/select_tool.svg'), auto";
}

function init() {
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.classList.add('pointer');
  h1.textContent = 'Hi there';
  h2.textContent = 'Enjoy creating on our platform';
  artboard.append(h1, h2);

  selectedText = h1;

  // tool event listeners
  selectTool.addEventListener('click', e => setToolToSelect(e));
  cursorTool.addEventListener('click', resetTextListeners);

  // input event listeners
  userInput.addEventListener('keyup', printUserInput);
  fontSizeInput.addEventListener('change', e => setFontSize(e));
}

init();
