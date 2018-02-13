import axios from 'axios';
import CircularJSON from 'circular-json';
/*import {
  getNextCampaignId
} from '../helpers/sendgrid'*/
import * as firebase from "firebase";
const firebaseDatabaseUrl = "https://blog-9ccca.firebaseio.com";

var firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: firebaseDatabaseUrl,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID
};
firebase.initializeApp(firebaseConfig);

// const database = firebase.database();


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
      console.log(errorClone, 'error');

      return next(errorClone);
    });
}

exports.sendEmail = function(req, res, next) {
  const isPostCreated = req.body
  const data = JSON.stringify({})
  // const sendGridCampaignId = getNextCampaignId()
  console.log('before')
  getSendGridCampaigns()
  console.log('after')
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
        console.log(responseClone, 'response')

        Promise.resolve(response)
      }).catch(function (error) {
        const errorClone = CircularJSON.stringify(error)
        console.log(errorClone, 'error');

        return next(errorClone);
      });
  }

  function getSendGridCampaigns() {
    // console.log('entering')
    // firebase.database().ref('/rest/blog/sendgridCampaign/').once('ids')
    //   .then(function(data) {
    //     console.log(data, 'data')
    //   }).catch(function(error) {
    //     console.log(error)
    //   });
    axios.get('https://blog-9ccca.firebaseio.com/blog/sendgridCampaign.json?auth=hiding')
      .then(function(response) {
        const campaignIds = response.data.ids
        console.log(campaignIds[0].toString(), 'ids')
        //Promise resolve/return?
      }).catch(function(error) {
        console.log(error, 'error')
        //Promise reject error here?
      });
  }

  //shift one and then post rest of it
}
