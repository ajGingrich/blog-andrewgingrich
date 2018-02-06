export const sendGridCampaignId = '2383843';

function getNextCampaignId() {
  const campaignIds = ['2383843', '2383834']

  return campaignIds.shift()
}

export {
  getNextCampaignId
}
