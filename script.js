const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notes");
const searchInput = document.getElementById("search");
const addBtn = document.getElementById("addBtn");

let notes = loadNotes();

function renderNotes(filter = "") {
  notesDiv.innerHTML = "";

  notes
    .filter(note => note.toLowerCase().includes(filter.toLowerCase()))
    .forEach((note, index) => {
      const div = document.createElement("div");
      div.className = "note";
      div.textContent = note;

      div.onclick = () => {
        notes.splice(index, 1);
        saveNotes(notes);
        renderNotes(searchInput.value);
      };

      notesDiv.appendChild(div);
    });
}

addBtn.onclick = () => {
  const value = noteInput.value.trim();
  if (!value) return;

  notes.push(value);
  saveNotes(notes);
  noteInput.value = "";
  renderNotes();
};

searchInput.oninput = () => {
  renderNotes(searchInput.value);
};

renderNotes();
