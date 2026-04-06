const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/notes');

mongoose.connect("mongodb://localhost:27017/")
.then(()=> console.log("MonngoDB connected"))
.catch((err)=> console.log(err));

app.use(express.json());

app.use('/notes', router);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000...')
})