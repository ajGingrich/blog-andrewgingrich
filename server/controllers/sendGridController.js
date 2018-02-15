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
  const campaignIds = firebaseController.getSendGridCampaigns()

  if (isPostCreated) {
    const config = {
      headers: {
        'authorization': 'Bearer ' + process.env.SENDGRID_KEY
      }
    }

    campaignIds.then(function(ids) {
      console.log(ids)
      const idsArray = ids.slice(0)
      const sendGridCampaignId = idsArray.shift()
      const sendUrl = 'https://api.sendgrid.com/v3/campaigns/' + sendGridCampaignId + '/schedules/now'

      axios.post(sendUrl, data, config)
        .then(function (response) {
          const responseClone = CircularJSON.stringify(response)

          console.log(responseClone)

          //then post new array here
          Promise.resolve(response)
        }).catch(function (error) {
          const errorClone = CircularJSON.stringify(error)

          console.log(errorClone)
          return next(errorClone);
        });
    }).catch(function(error) {
      console.log(error)
      //Promise reject?
      reject(error)
    })

  }
}
