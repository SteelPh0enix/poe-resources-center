/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
const { fetchGameAchievementsDataFromSteam } = require('./steam-achievements')

exports.onPreInit = () => {
  console.log('[SteamAchievements] Loaded!')
}

const GAME_NODE_TYPE = 'GameAchievements'

function zipGameTitlesToAchievements (titles, achievements) {
  return titles.map((title, index) => {
    return { id: index, title, achievements: achievements[index] }
  })
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId
}, { games }) => {
  console.log('[SteamAchievements] Started data fetching process...')
  const { createNode } = actions
  const gameTitles = games.map(({ title }) => title)

  const fetchedAchievements = await fetchGameAchievementsDataFromSteam(games.map(({ steamID }) => steamID)).catch((error) => {
    console.log(`Error when fetching achievements: ${error}`)
  })

  const gamesData = zipGameTitlesToAchievements(gameTitles, fetchedAchievements)

  gamesData.forEach(game => createNode({
    ...game,
    id: createNodeId(`${GAME_NODE_TYPE}-${game.id}`),
    parent: null,
    children: [],
    internal: {
      type: GAME_NODE_TYPE,
      content: JSON.stringify(game),
      contentDigest: createContentDigest(game)
    }
  }))

  console.log('[SteamAchievements] Data fetched and put in GraphQL!')
}

exports.pluginOptionsSchema = ({ Joi }) => {
  const gameInfo = Joi.object().keys({
    title: Joi.string().required().description('Game title, visual-only'),
    steamID: Joi.string().required().description('Steam game ID')
  })

  const games = Joi.array().items(gameInfo).required().description('List of games to fetch data about')

  return Joi.object({
    games
  })
}
