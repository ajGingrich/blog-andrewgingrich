import express from 'express';
import path from 'path';
const router = express.Router();

//home page
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname), '../../index.html');
});

/*router.get('/addContact', function(req, res) {
  //do contact stuff here and send back to index
  res.sendFile(path.join(__dirname), '../../index.html');
});*/

//catch webhook and publish

module.exports = router;
