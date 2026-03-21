let saveMomentBtn = document.querySelector("#save-moment");
let inputField = document.querySelector("#emotion");
let notesText = document.querySelector("#notes-text");
let moodBtn = document.querySelectorAll(".mood-btn");

moodBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    inputField.value += btn.dataset.emoji;
    inputField.focus();
  });
});

saveMomentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputField.value.trim()) {
    let newLi = document.createElement("li");
    let textSpan = document.createElement("span");
    let deleteBtn = document.createElement("button");

    textSpan.textContent = inputField.value;
    textSpan.classList.add("note-content");

    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => newLi.remove());

    newLi.appendChild(textSpan);
    newLi.appendChild(deleteBtn);

    notesText.prepend(newLi);

    inputField.value = "";
  }
});
