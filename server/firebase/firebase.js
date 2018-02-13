// import * as firebase from "firebase";
import google from 'googleapis'
import axios from 'axios'

const serviceAccount = require('./serviceAccountKey')
const scopes = ["https://www.googleapis.com/auth/firebase.database"]

// Authenticate a JWT client with the service account.
const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes
);

// Use the JWT client to generate an access token.
jwtClient.authorize(function(error, tokens) {
  if (error) {
    console.log("Error making request to generate access token:", error);
  } else if (tokens.access_token === null) {
    console.log("Provided service account does not have permission to generate access tokens");
  } else {
    var accessToken = tokens.access_token;

    // See the "Using the access token" section below for information
    // on how to use the access token to send authenticated requests to
    // the Realtime Database REST API.
  }
});
