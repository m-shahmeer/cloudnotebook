const mongoose = require('mongoose');

import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
  name:{
        type: String,
        required: true
  
  },
  description:{
    type: String,
    require: true,
    unique: true
  },
  tag: {
    type: String,
    default: "General"
  },
  date:{
    type: Date,
    default: Date.now
  },

  
});

module.exports = mongoose.model('notes', NotesSchema);