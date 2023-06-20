const router = require('express').Router();
const Board = require('../models/board');

// Find All
router.get('/', (req, res) => {
  Board.find()
      .then((boards) => {
        if (!boards.length) return res.status(404).send({ err: 'Boards not found' });
        res.send(`find successfully: ${boards}`);
      })
      .catch(err => res.status(500).send(err));
  });

  module.exports = router;