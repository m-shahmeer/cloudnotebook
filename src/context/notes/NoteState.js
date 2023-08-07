import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    // eslint-disable-next-line
        const notesInitial =[ 

           {
                "_id": "64cb42d342d87e6f5c2a96db",
                "user": "64cb1f53867de94ae4a57bf8",
                "title": "My Title",
                "description": "Please wake up ea",
                "tag": "personal",
                "date": "2023-08-03T06:01:55.748Z",
                "__v": 0
              },
              {
                "_id": "64cb42d442d87e6f5c2a96dd",
                "user": "64cb1f53867de94ae4a57bf8",
                "title": "My Title",
                "description": "Please wake up ea",
                "tag": "personal",
                "date": "2023-08-03T06:01:56.589Z",
                "__v": 0
              },
              {
                "_id": "64cb42d542d87e6f5c2a96eb",
                "user": "64cb1f53867de94ae4a57bf8",
                "title": "My Title",
                "description": "Please wake up ea",
                "tag": "personal",
                "date": "2023-08-03T06:01:57.957Z",
                "__v": 0
              },
              {
                "_id": "64cb42d642d87e6f5c2a96ed",
                "user": "64cb1f53867de94ae4a57bf8",
                "title": "My Title",
                "description": "Please wake up ea",
                "tag": "personal",
                "date": "2023-08-03T06:01:58.095Z",
                "__v": 0
              },
              {
                "_id": "64cbe0e7bf9f8a3114d33910",
                "user": "64cb1f53867de94ae4a57bf8",
                "title": "New Note2",
                "description": "This my new note",
                "tag": "personal",
                "date": "2023-08-03T17:16:23.566Z",
                "__v": 0
              }
            
            ]

              const [notes, setNotes]= useState(notesInitial)

        return(
            <NoteContext.Provider value={{notes, setNotes}}>
                {props.children}
            </NoteContext.Provider>
        )
    }
  

export default NoteState;