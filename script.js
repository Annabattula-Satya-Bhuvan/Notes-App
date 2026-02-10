const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notes");
const searchInput = document.getElementById("search");
const addBtn = document.getElementById("addBtn");

let notes = loadNotes();

function renderNotes(filter = "") {
  notesDiv.innerHTML = "";

  notes.forEach((note, index) => {
    if (!note.toLowerCase().includes(filter.toLowerCase())) return;

    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const text = document.createElement("span");
    text.textContent = note;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    delBtn.onclick = () => {
      notes.splice(index, 1);
      saveNotes(notes);
      renderNotes(searchInput.value);
    };

    noteDiv.appendChild(text);
    noteDiv.appendChild(delBtn);
    notesDiv.appendChild(noteDiv);
  });
}

addBtn.onclick = () => {
  const value = noteInput.value.trim();
  if (!value) return;

  notes.push(value);
  saveNotes(notes);
  noteInput.value = "";
  renderNotes(searchInput.value);
};

searchInput.addEventListener("input", () => {
  renderNotes(searchInput.value);
});

renderNotes();
