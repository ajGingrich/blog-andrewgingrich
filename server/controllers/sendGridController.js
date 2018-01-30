import axios from 'axios';

exports.addContact = function(req, res) {
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
}

exports.sendEmail = function(req, res) {
  const isPostCreated = req.body
  if (isPostCreated) {
    console.log('do stuff')
  }
}
