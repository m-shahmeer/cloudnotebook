import noteContext from "../context/notes/noteContext";
import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()
  }, [])

  return (
    <>
    <AddNote/>
     <div className="container">
    <div className="row my-3">
      <h3>Your Notes</h3>
      {notes.map((note) => {    
        return <NoteItem key = {note._id} note={note} />;
      })}
    </div>
    </div>
    </>
   
  );
};

export default Notes;
