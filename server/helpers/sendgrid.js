function getNextCampaignId() {
  const campaignIds = ['2384144', '2384142', '2384140', '2384137', '2384133',
                      '2384131', '2384129', '2384126', '2384124', '2384122',
                      '2384119', '2384115', '2384113', '2384027', '2384025',
                      '2384022', '2384020', '2384014', '2384012', '2384008']

  const nextCampaignId = campaignIds.shift();

                      
  console.log(campaignIds.length)

  return nextCampaignId
}

export {
  getNextCampaignId,
}
