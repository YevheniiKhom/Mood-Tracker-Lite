let happyBtn = document.querySelector("#happy-btn");
let suprisedBtn = document.querySelector("#suprised-btn");
let sadBtn = document.querySelector("#sad-btn");
let saveMomentBtn = document.querySelector("#save-moment");
let inputField = document.querySelector("#emotion");
let notesText = document.querySelector("#notes-text");

//  Рефакторинг  Зробити емоції однією командою
happyBtn.addEventListener("click", () => {
  event.preventDefault();
  inputField.value += `\u{1F642}`;
  inputField.focus();
});
suprisedBtn.addEventListener("click", () => {
  event.preventDefault();
  inputField.value += `\u{1F610}`;
  inputField.focus();
});
sadBtn.addEventListener("click", () => {
  event.preventDefault();
  inputField.value += `\u{1F61F}`;
  inputField.focus();
});

saveMomentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let create = document.createElement("li");
  create.textContent = inputField.value;
  notesText.appendChild(create);
  inputField.value = "";
});
