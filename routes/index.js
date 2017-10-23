var express = require('express');
var router = express.Router();

//home page
router.get('/', function(req, res) {
    res.render('index', {message: req.flash('message')});
});

module.exports = router;
