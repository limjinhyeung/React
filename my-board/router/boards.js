const router = require('express').Router();
const Board = require('../models/board');

// Find All
router.get('/', (req, res) => {
  Board.find()
      .then((boards) => {
        if (!boards.length) return res.status(404).send({ err: 'Boards not found' });
        res.send({
          success: true,
          data: boards
        });
      })
      .catch(err => res.status(500).send(err));
});

//create(INSERT)
router.post('/', (req,res)=> {
  const { no, title, content } = req.body;
  try{
    Board.create({no, title, content});
  }catch(err){
    next(err);
  };
});

//Find one (DETAIL paage)
router.get('/:no',(req,res)=>{
  Board.findOne({no:req.params.no}).then((board)=>{
    res.send({
      detail: board
    });
  });
});

module.exports = router;