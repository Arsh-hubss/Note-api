const Note = require('../models/Note');

//create note
const createNote = async(req,res ) =>{
const note = new Note({
    title: req.body.title,
    content : req.body.content

});

const savedNote = await note.save();

res.status(201).json(savedNote);
}

//get all notes stored
const getAllNotes = async(req, res)=>{
    const notes =await Note.find()

    res.status(200).json(notes);
}

//just gets one note by id
const getNote = async(req,res)=>{
    const id = req.params.id;
    const note = await Note.findById(id);

    res.status(200).json(note)
}

//updates note
const updateNote = async(req,res)=>{
  
    const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
         req.body ,
        { new : true}
    )

    res.status(200).json(updatedNote);
}

//delete notes
const deleteNote =  async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({message : "Note has been deleted"});
}

module.exports = {
	createNote,
	getAllNotes,
	getNote,
	updateNote,
	deleteNote
}
