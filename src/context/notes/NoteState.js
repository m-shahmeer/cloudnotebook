import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  // eslint-disable-next-line
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

   // Get all Notes
   const getNotes = async () => {
        // API Call

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYjFmNTM4NjdkZTk0YWU0YTU3YmY4In0sImlhdCI6MTY5MTA4MjQ5OX0.de56rpRpNjfAEbkA6U2bWGkCo2Hh48X_zZKJRh_qLow",
          },
        });
        const json = await response.json()
        setNotes(json)
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
        // API Call

        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYjFmNTM4NjdkZTk0YWU0YTU3YmY4In0sImlhdCI6MTY5MTA4MjQ5OX0.de56rpRpNjfAEbkA6U2bWGkCo2Hh48X_zZKJRh_qLow",
          },
          body: JSON.stringify({title, description, tag}),
        });
    const note = {
      _id: "id",
      user: "64cb1f53867de94ae4a57bf8",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-03T06:01:55.748Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYjFmNTM4NjdkZTk0YWU0YTU3YmY4In0sImlhdCI6MTY5MTA4MjQ5OX0.de56rpRpNjfAEbkA6U2bWGkCo2Hh48X_zZKJRh_qLow",
      }
    });
    const json = response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYjFmNTM4NjdkZTk0YWU0YTU3YmY4In0sImlhdCI6MTY5MTA4MjQ5OX0.de56rpRpNjfAEbkA6U2bWGkCo2Hh48X_zZKJRh_qLow",
      },
      body: JSON.stringify(title, description, tag),
    });
    const json = response.json();
    console.log(json);

    // Logic to edit in Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
