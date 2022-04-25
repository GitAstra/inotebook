
import React, {useContext, useEffect, useState} from 'react';
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import Modal from './Modal';

export default function NotesMain() {
    const context = useContext(noteContext);
    const {notes, getAllNotes, editNote} = context;
    const [edit, setEdit] = useState(false); 
    const [currentNote, setCurrentNote] = useState({});

    useEffect(() => {
      getAllNotes()
  }, []);

  // function modalControl(){
  //   setEdit(prev=> !prev)
  // }

  function handleOperation(note){
    // console.log(note);
    setEdit(prev=> !prev)
    setCurrentNote(note)
  }

  return (
      <div className='container'>
        { edit && <Modal close={()=> setEdit(prev=> !prev)} note={currentNote}/>}
        <h2>All Notes (<span>{notes.length}</span>)</h2>
        
    <div className="notes">
    {notes.map(note=>{
        return (
            <NoteItem key={note._id} note={note} currentNote={handleOperation}/>
        )
        })}
    </div>
    </div>
  )
}

// vaer =   title={note.title} id={note._id}   date={note.date} tag={note.tag}