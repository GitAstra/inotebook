import { useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = `http://localhost:5000`;

  const [notes, setnotes] = useState([]);

  
  

  // Get All Notes
  async function getAllNotes(){
    const response = await fetch(
      `${host}/api/notes/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MTM2NzE4NTc4NzVlYjQ3YTY4ZTNkIn0sImlhdCI6MTY1MDYyMDE1Nn0.Lb6rHJDho1WGwmTZsBNxdJpt-WcHOK4aVOGWDoBsFD8",
        }
      }
    )

    const returner =  await response.json();
    setnotes(returner);
    // console.log(returner);

  }

  // Add a Note
  async function addNote(data) {
    // Api
    const { title, description, tag } = data;

    const response = await fetch(
      `${host}/api/notes/addnote`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MTM2NzE4NTc4NzVlYjQ3YTY4ZTNkIn0sImlhdCI6MTY1MDYyMDE1Nn0.Lb6rHJDho1WGwmTZsBNxdJpt-WcHOK4aVOGWDoBsFD8",
        },
        body: JSON.stringify({title, description ,tag})
      }
    );
    const returner = response.json();
    // note = null;
    const note = {
      id: 21314,
      title: title,
      description: description,
    };
    console.log(title, description);
    setnotes(notes.concat(note));
  }
  // Delete a Note
  async function delNote(id) {

    const response = await fetch(
      `${host}/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MTM2NzE4NTc4NzVlYjQ3YTY4ZTNkIn0sImlhdCI6MTY1MDYyMDE1Nn0.Lb6rHJDho1WGwmTZsBNxdJpt-WcHOK4aVOGWDoBsFD8",
        }
      }
    );
    const returner = await response.json()
    console.log(returner);

    
    console.log(`Note with ${id} deleted`);
    setnotes((prev) => {
      return prev.filter((note) => {
        return note._id !== id;
      });
    });
  }

  // Edit a Note
  async function editNote(id, note) {

    const {title, description, tag} = note;

    // Client
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

    // Api
    // console.log(id);
    const response = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MTM2NzE4NTc4NzVlYjQ3YTY4ZTNkIn0sImlhdCI6MTY1MDYyMDE1Nn0.Lb6rHJDho1WGwmTZsBNxdJpt-WcHOK4aVOGWDoBsFD8",
        },
        body: JSON.stringify({title, description ,tag})
      }
    );
    const data = await response.json();
    console.log(data);

    
  }

  return (
    <noteContext.Provider
      value={{ notes, setnotes, addNote, delNote, editNote, getAllNotes, editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
