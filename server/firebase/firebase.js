// import * as firebase from "firebase";
import google from 'googleapis'
import axios from 'axios'

const serviceAccount = require('./serviceAccountKey')
const scopes = ["https://www.googleapis.com/auth/firebase.database"]
//const database url

// Authenticate a JWT client with the service account.
const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes
);

getFirebaseToken = function() {
  // Use the JWT client to generate an access token.
  jwtClient.authorize(function(error, tokens) {
    if (error) {
      console.log("Error making request to generate access token:", error);
    } else if (tokens.access_token === null) {
      console.log("Provided service account does not have permission to generate access tokens");
    } else {
      return tokens.access_token;
    }
  });
}



exports.getSendGridCampaigns() {
    axios.get('https://blog-9ccca.firebaseio.com/blog/sendgridCampaign.json?access=hiding')
      .then(function(response) {
        const campaignIds = response.data.ids
        console.log(campaignIds[0].toString(), 'ids')
        //Promise resolve/return?
      }).catch(function(error) {
        console.log(error, 'error')
        //Promise reject error here?
      });
  }
