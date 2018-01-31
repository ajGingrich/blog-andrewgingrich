import axios from 'axios';
import CircularJSON from 'circular-json';
import { sendGridConfig, sendGridCampaignId } from '../constants/sendgrid'

exports.addContact = function(req, res, next) {
  const email = req.body.email.slice(0)
  const data = JSON.stringify([{ 'email': email }])

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
  const data = null

  if (isPostCreated) {
    axios.post('https://api.sendgrid.com/v3/campaigns/' + sendGridCampaignId + '/schedules/now', data, config)
      .then(function (response) {
        //const responseClone = CircularJSON.stringify(response)
        //res.send(responseClone)
        console.log(response)
        Promise.resolve(response)
      }).catch(function (error) {
        console.log(error, 'error');
        return next(error);
      });
  }
}
