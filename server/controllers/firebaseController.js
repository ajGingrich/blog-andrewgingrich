import axios from 'axios'
const appRoot = require('app-root-path');
const google = require('googleapis');
const Promise = require('bluebird');
// const serviceAccount = require(appRoot + '/serviceAccountKey.json')

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/firebase.database'
];
const databaseUrl = 'https://blog-9ccca.firebaseio.com/blog/sendgridCampaign.json'

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
        reject('Provided service account does not have permission to generate access tokens')
      } else if (tokens.access_token === null) {
        reject('Provided service account does not have permission to generate access tokens')
      } else {
        resolve(tokens.access_token)
      }
    });
  })
}

exports.getSendGridCampaigns = function() {
  const accessToken = getFirebaseToken()

  return new Promise(function(resolve, reject) {
    accessToken.then(function(token) {
      axios.get(databaseUrl + '?access_token=' + token) // eslint-disable-line camelcase
        .then(response => resolve(response.data || response.data.ids))
        .catch(error => console.log(error)) // eslint-disable-line no-console
    }).catch(error => reject(error))
  })
}

exports.updateSendGridCampaigns = function(ids) {
  const accessToken = getFirebaseToken()
  const data = JSON.stringify(ids)

  accessToken.then(function(token) {
    const config = {
      headers: {
        'authorization': 'Bearer ' + token
      }
    }

    axios.put(databaseUrl, data, config)
      .then(response => console.log(response)) // eslint-disable-line no-console
      .catch(error => console.log(error)) // eslint-disable-line no-console
  }).catch(error => reject(error))
}
