import React, { useState, useEffect } from "react";

import { marked } from "marked";

const Notes = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), text: "" }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  return (
    <div>
      <button className="add" onClick={addNote}>
        <i className="fas fa-plus"></i> Add note
      </button>
      <div className="notes-container">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <div className="tools">
            <button className="edit" onClick={() => updateNote(note.id, note.text)}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="delete" onClick={() => deleteNote(note.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          <textarea
            value={note.text}
            onChange={(e) => updateNote(note.id, e.target.value)}
          ></textarea>
          <div className="main" dangerouslySetInnerHTML={{ __html: marked(note.text) }}></div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Notes;
