import React, {useState, useContext} from 'react';
import noteContext from '../context/notes/noteContext'


export default function Modal({close, note}) {

    const context = useContext(noteContext);
    const {editNote} = context;

    const [fields, setFields] = useState({
        title: note.title,
        description: note.description,
        tag: note.tag
    })

    function handleClick(e){
        e.preventDefault()
        editNote(note._id, fields)
        close();
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
    <div className="modal">
        
        <div className="modal-body">
        <div className="" style={{textAlign: 'right', padding: '1rem', fontSize: '1.2555rem'}}>
        <i className="fa-solid fa-xmark" onClick={()=> close()}></i>
        </div>
            <form action="" className='addNote'>
            <h3>Add A New Note</h3>
            <div className="">
            <label htmlFor="">Title</label>
            <input type="text" name='title' placeholder='Title' onChange={handleChange} value={fields.title}/>
            </div>

            <div className="">
            <label htmlFor="">Description</label>
            <textarea cols="30" rows="5" placeholder='Note Description' name='description' value={fields.description} onChange={handleChange}></textarea>
            </div>
            <button className='addBtn' onClick={handleClick}>Submit</button>
        </form>
        </div>
    </div>
  )
}
