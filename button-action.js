const magicButton = document.getElementById("magic-button");

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

magicButton.onclick = changeButtonText;