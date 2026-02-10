function loadNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}
