
import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

export default function NotesMain() {
    const context = useContext(noteContext);
    const {notes, setnotes} = context;

  return (
      <div className='container'>
        <span>{notes.length} Notes</span>
    <div className="notes">
    {notes.map(note=>{
        return (
            <NoteItem title={note.title} desc={note.description} date={note.date} tag={note.tag}/>
        )
        })}
    </div>
    </div>
  )
}