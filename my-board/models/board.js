const mongoose = require('mongoose');

// Define Schemes
const boardSchema = new mongoose.Schema({
  no: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, default: false }
},
{
  timestamps: true,
  //없으면 생성함.
  collection: 'board'
});

// Create Model & Export
module.exports = mongoose.model('Board', boardSchema);