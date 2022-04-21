import { useState } from 'react';
import noteContext from './noteContext';


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "626139be8e2029d33e9593b4",
          "user": "62613671857875eb47a68e3d",
          "title": "Vue.js",
          "description": "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
          "tag": "Personal",
          "date": "2022-04-21T11:02:22.518Z",
          "__v": 0
        },
        {
          "_id": "62613a0c8e2029d33e9593b7",
          "user": "62613671857875eb47a68e3d",
          "title": "React",
          "description": "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
          "tag": "Personal",
          "date": "2022-04-21T11:03:40.353Z",
          "__v": 0
        }
      ];

      const [notes, setnotes] = useState(notesInitial)
    
    return (
        <noteContext.Provider value={{notes, setnotes}}>
            {props.children}
        </noteContext.Provider>
    )

}


export default NoteState;