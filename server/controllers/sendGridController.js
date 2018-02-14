import axios from 'axios';
import CircularJSON from 'circular-json';
import firebaseController from './firebaseController';

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
      const errorClone = CircularJSON.stringify(error)

      return next(errorClone);
    });
}

exports.sendEmail = function(req, res, next) {
  const isPostCreated = req.body
  const data = JSON.stringify({})
  const hi = firebaseController.getSendGridCampaigns()
  console.log(hi)
  const sendGridCampaignId = '2384144'
  const sendUrl = 'https://api.sendgrid.com/v3/campaigns/' + sendGridCampaignId + '/schedules/now'
  const config = {
    headers: {
      'authorization': 'Bearer ' + process.env.SENDGRID_KEY
    }
  }

  if (isPostCreated) {
    axios.post(sendUrl, data, config)
      .then(function (response) {
        const responseClone = CircularJSON.stringify(response)

        Promise.resolve(response)
      }).catch(function (error) {
        const errorClone = CircularJSON.stringify(error)

        // return next(errorClone);
      });
  }
}
