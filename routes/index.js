const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/plants')
  .then( () => console.log('connection to database successful'))
  .catch( err => console.error(err))

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Plants' });
});

module.exports = router;
