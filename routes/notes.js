const express = require('express');
const router = express.Router();
const  {
	createNote,
	getAllNotes,
	getNote,
	updateNote,
	deleteNote
} = require('../controllers/function')

// //create note
// router.post('/',createNote);

// //get all notes
// router.get('/', getAllNotes)

// //get single note
// router.get('/:id',getNote );

// //update Notes
// router.put('/:id', updateNote);

// //delete Notes
// router.delete('/:id', deleteNote);

router.route('/').post(createNote).get(getAllNotes);
router.route('/:id').get(getNote).put(updateNote).delete(deleteNote);

module.exports = router; 
