import express from 'express';
import path from 'path';
import axios from 'axios';
const router = express.Router();

//add email recipient
router.post('/api/addcontact', function(req, res) {

  const data = JSON.stringify([{ email: req.body.email }])
  const config = {
    headers: {
      'Authorization': 'Bearer ' + process.env.SENDGRID_KEY,
      'Content-Type': 'application/json'
    }
  }

  axios.post('https://api.sendgrid.com/v3/contactdb/recipients', data, config)
    .then(function (response) {
      console.log(response, 'success');
      //add Timeout??
      res.send(response)
    }).catch(function (error) {
      console.log(error, 'error');
      res.send(error)
    });
})

//home page
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname), '../../index.html');
});

//catch webhook and publish

module.exports = router;
