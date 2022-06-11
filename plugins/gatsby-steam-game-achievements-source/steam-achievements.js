const axios = require('axios')

async function fetchGameAchievementsDataFromSteam (gamesID, format = 'json') {
  const generateRequestURL = (id) => `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${id}&format=${format}`
  const urlsList = gamesID.map(id => generateRequestURL(id))
  return (await axios.all(urlsList.map(url => axios.get(url)))).map(({ data }) => data.achievementpercentages.achievements)
}

module.exports = { fetchGameAchievementsDataFromSteam }
