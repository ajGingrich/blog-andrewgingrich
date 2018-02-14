
const google = require("googleapis");
const Promise = require("bluebird");

import axios from 'axios'

const serviceAccount = require('./serviceAccountKey.json')
const scopes = ["https://www.googleapis.com/auth/firebase.database"]
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
  jwtClient.authorize(function(error, tokens) {
    if (error) {
      console.log("Error making request to generate access token:", error);
    } else if (tokens.access_token === null) {
      console.log("Provided service account does not have permission to generate access tokens");
    } else {
      console.log(tokens.access_token, 'token baby')
      return tokens.access_token;
    }
  });
}

exports.getSendGridCampaigns = function() {

    const access_token = getFirebaseToken();
    //need a promise here
    
    console.log(access_token, 'another token')
    axios.get(databaseURL + '?access_token=' + access_token)
      .then(function(response) {
        const campaignIds = response.data.ids
        console.log(campaignIds[0].toString(), 'ids')
        //Promise resolve/return?
      }).catch(function(error) {
        console.log(error, 'error')
        //Promise reject error here?
      });
  }
