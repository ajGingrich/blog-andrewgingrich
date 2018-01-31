export const sendGridConfig = {
  headers: {
    'Authorization': 'Bearer ' + process.env.SENDGRID_KEY,
    'Content-Type': 'application/json'
  }
}

export const sendGridCampaignId = '';
