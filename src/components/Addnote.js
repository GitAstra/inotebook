import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function Addnote() {
    const context = useContext(noteContext);
    const {addNote} = context;


    const [fields, setFields] = useState({
        title: "",
        description: ""
    })

    function handleClick(e){
        addNote(fields)
        e.preventDefault()
    }
    function handleChange(e){
        const {name, value} = e.target;
        setFields(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

  return (
    <div className='container'>

      

      <form action="/api/notes/addnote" method='POST' className='addNote'>
        <h3>Add A New Note</h3>
        <div className="">
          <label htmlFor="">Title</label>
          <input type="text" name='title' placeholder='Title' onChange={handleChange}/>
        </div>

        <div className="">
          <label htmlFor="">Description</label>
          <textarea cols="30" rows="5" placeholder='Note Description' name='description' onChange={handleChange}></textarea>
        </div>
        <button className='addBtn' onClick={handleClick}>Submit</button>
      </form>

      
      </div>
  )
}
