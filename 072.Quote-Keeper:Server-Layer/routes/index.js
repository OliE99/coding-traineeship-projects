// routes/index.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {source, attributed, quote} = req.body;
    res.render('index');
});

router.get('/', (req, res) => {
  res.render('index');
})

module.exports = router;
