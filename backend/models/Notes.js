const mongoose = require("mongoose");

const NotesSchema = new Schema({
  title: {
    type: String,
    require: true
  },

  description: {
    type: String,
    require: true
  },

  tags: {
    type: String,
    default:'general'
  },

  date: {
    type: Date,
    require: Date.now
  },
});

module.exports = mongoose.model('notes', NotesSchema);