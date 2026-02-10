const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notes");
const addBtn = document.getElementById("addBtn");

let notes = loadNotes();

function renderNotes() {
  notesDiv.innerHTML = "";

  notes.forEach((note, index) => {
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
      renderNotes();
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
  renderNotes();
};

renderNotes();
