import React from 'react';
import NotesMain from './NoteMain';
export default function Home() {

  return (
    <div className='container'>

      <form action="/api/notes/addnote" method='POST' className='addNote'>
        <h3>Add A New Note</h3>
        <div className="">
          <label htmlFor="">Title</label>
          <input type="text" name='title' placeholder='Title'/>
        </div>

        <div className="">
          <label htmlFor="">Description</label>
          <textarea name="description" cols="30" rows="5" placeholder='Note Description'></textarea>
        </div>
        <button className='addBtn'>Submit</button>
      </form>

      <NotesMain/>

    


    </div>
  )
}
