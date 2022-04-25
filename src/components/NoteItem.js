import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';

export default function NoteItem({note, update, currentNote}) {

  const context = useContext(noteContext);
  const {delNote, editNote} = context;



  return (
    <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <p>{new Date(note.date).toLocaleString()}</p>
        <div className="actions">
        <i className="fa-solid fa-trash-can" onClick={()=> delNote(note._id)}></i>
        <i className="fa-solid fa-pencil" onClick={()=> currentNote(note)}></i>
        </div>
    </div>
  )
}
