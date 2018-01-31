import axios from 'axios';
import CircularJSON from 'circular-json';

exports.addContact = function(req, res, next) {
  const email = req.body.email.slice(0)
  const data = JSON.stringify([{ 'email': email }])

  const config = {
    headers: {
      'Authorization': 'Bearer ' + process.env.SENDGRID_KEY,
      'Content-Type': 'application/json'
    }
  }

  axios.post('https://api.sendgrid.com/v3/contactdb/recipients', data, config)
    .then(function (response) {
      const responseClone = CircularJSON.stringify(response)
      res.send(responseClone)
    }).catch(function (error) {
      console.log(error, 'error');
      return next(error);
    });
}

exports.sendEmail = function(req, res) {
  const isPostCreated = req.body
  if (isPostCreated) {
    console.log('do stuff')
  }
}
