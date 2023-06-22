const router = require('express').Router();
const home = require('../models/home');

router.get('/', (req, res) => {
    home.find()
    .then((response)=>{
        res.send("welcome")
    })
    .catch(err => res.status(500).send(err))
    });

module.exports = router;