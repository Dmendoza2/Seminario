var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', alumno:'David Mendoza 0601-1998-00243'});
});

module.exports = router;
