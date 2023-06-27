const router = require('express').Router();
const Board = require('../models/board');

// Find All(BOARDLIST page)
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

//create(INSERT page)
router.post('/', (req,res)=> {
  const { no, title, content } = req.body;
  try{
    Board.create({no, title, content});
  }catch(err){
    next(err);
  };
});

//Find one (DETAIL page)
router.get('/:no',(req,res)=>{
  Board.findOne({no:req.params.no}).then((board)=>{
    res.send({
      detail: board
    });
  });
});

//updateOne(UPDATE Page)
router.post('/:no', (req,res)=>{
  const {title, content} = req.body;
  try{
    //.exec()를 붙여주니까 됐다..... 왜???
    Board.updateOne({no:req.params.no},{$set : {title: title, content: content}}).exec()
  } catch(err){
    next(err);
  };
});


router.delete('/:no',(req,res)=>{
  try{ 
    Board.deleteOne({no:req.params.no}).exec();
  }catch(err){
    next(err);
  }
})

module.exports = router;