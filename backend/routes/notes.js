const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();
const Note = require('../models/Notes');
const {body, validationResult} = require('express-validator');




// Route 1 - Getting ALl Notes '/api/notes/fetchallnotes'; Login Required


router.get('/fetchallnotes', fetchUser, async (req, res)=>{
    const notes = await Note.find({user: req.user.id});
    console.log(notes);
    res.json(notes)
})



// Route 2 - Getting ALl Notes '/api/notes/addnote'; Login Required
router.post('/addnote', fetchUser,[
    body('title', "Title Should Not be Empty").exists(),
    body('description', "Description Should Not be empty").exists()
], async (req, res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{

    
    const {title, description, tag} = req.body;

    const note = new Note({
        user: req.user.id,
        title,
        description,
        tag
    })

    const saveNote = await note.save()
    res.json(saveNote)
}

    catch(err){
        res.status(500).send("Some Error Occured")

    }


})

// Route 3
router.put('/updatenote/:id', fetchUser, async(req, res)=>{
    const {title, description, tag} = req.body;

    // Create a new Note Obj

    let newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};
    
    // Find Note to be Updated
    let note = await Note.findById(req.params.id);
    if(!note){
        res.status(404).send("Not Found")
    }
    if(note.user.toString() !== req.user.id){
        return res.status(401).send('Not Allowed');
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
    res.json(note)
    
})


router.delete('/deletenote/:id', fetchUser, async(req, res)=>{
   try{

   
    let note = await Note.findById(req.params.id);
    if(!note){
        res.status(404).send("Not Found")
    }
    if(note.user.toString() !== req.user.id){
        return res.status(401).send('Not Allowed');
    }
    note = await Note.findByIdAndDelete(req.params.id)
   res.json({success: `Note Deleted Successfully ${note.title}`})
    }
    catch{
        res.status(500).send("Some Error Occured")
    }
})


module.exports = router