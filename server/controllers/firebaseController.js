
const google = require("googleapis");
const Promise = require("bluebird");

import axios from 'axios'

const serviceAccount = require('./serviceAccountKey.json')
const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/firebase.database"
];
const databaseUrl = "https://blog-9ccca.firebaseio.com/blog/sendgridCampaign.json"

// Authenticate a JWT client with the service account.
const jwtClient = new google.google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes
);

const getFirebaseToken = function() {
  // Use the JWT client to generate an access token.
  return new Promise(function(resolve, reject) {
    jwtClient.authorize(function(error, tokens) {
      if (error) {
        reject("Provided service account does not have permission to generate access tokens")
      } else if (tokens.access_token === null) {
        reject("Provided service account does not have permission to generate access tokens")
      } else {
        resolve(tokens.access_token)
      }
    });
  })
}

exports.getSendGridCampaigns = function() {
    const access_token = getFirebaseToken()

    access_token.then(function(token) {
      axios.get(databaseUrl + '?access_token=' + token)
        .then(function(response) {
          const campaignIds = response.data.ids
          console.log(campaignIds[0].toString(), 'ids')
          //Promise resolve/return?
        }).catch(function(error) {
          console.log(error, 'error')
          //Promise reject error here?
        });

        //return a promise here? returnnnnn
    }).catch(function(error) {
      console.log(error ,'this is an error')
    })
  }
