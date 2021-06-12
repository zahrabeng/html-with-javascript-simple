// find the button in the DOM tree
const magicButton = document.getElementById("magic-button");

// define a function to change its text
function changeButtonText() {
  const textOptions = [
    "Magic lies this way",
    "This button is interactive",
    "Click me to do something!",
  ];
  const currentText = magicButton.textContent;
  const currentIndex = textOptions.indexOf(currentText);
  const nextIndex =
    currentIndex < textOptions.length - 1 ? currentIndex + 1 : 0;
  const nextText = textOptions[nextIndex];
  magicButton.textContent = nextText;
}

// run the function whenever the button is clicked
magicButton.onclick = changeButtonText;