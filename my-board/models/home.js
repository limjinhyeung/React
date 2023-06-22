const mongoose = require('mongoose');

// Define Schemes
const homeSchema = new mongoose.Schema({
    //스키마작성
},
{
  timestamps: true,
  //없으면 생성함.
  collection: 'board'
});

// Create Model & Export
module.exports = mongoose.model('Home', homeSchema);