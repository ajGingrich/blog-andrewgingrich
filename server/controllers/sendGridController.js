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

exports.sendEmail = function(req, res, next) { // eslint-disable-line no-unused-vars
  res.sendStatus(200);
  const isPostCreated = req.body
  const data = JSON.stringify({})
  const campaignIds = firebaseController.getSendGridCampaigns()

  if (isPostCreated) {
    const config = {
      headers: {
        'authorization': 'Bearer ' + process.env.SENDGRID_KEY
      }
    }

    campaignIds.then(function(ids) {
      const idsArray = ids && ids.slice(0)
      const sendGridCampaignId = idsArray && idsArray.shift()
      const sendUrl = 'https://api.sendgrid.com/v3/campaigns/' + sendGridCampaignId + '/schedules/now'

      axios.post(sendUrl, data, config)
        .then(function (response) {
          Promise.resolve(response)
          firebaseController.updateSendGridCampaigns(idsArray)
        }).catch(function (error) {
          const errorClone = CircularJSON.stringify(error)
          console.log(errorClone) // eslint-disable-line no-console
        });
    }).catch(error => console.log(error)) // eslint-disable-line no-console
  }
}
