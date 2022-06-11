import { graphql } from 'gatsby'
import * as React from 'react'
import MainLayout from '../layouts/mainLayout'

export default function AchievementsChartPage ({ data }: {data: object}): React.ReactElement {
  return (
    <MainLayout>
      <h2>This is PoE achievements chart</h2>

      <table>
        <thead>
          <tr>
            <th>Achievement name</th>
            <th>Playerbase %</th>
          </tr>
        </thead>

        <tbody>
          {
          }
        </tbody>
      </table>
    </MainLayout>
  )
}

export const query = graphql`
  query GetPoEAchievements {
  allGameAchievements(filter: {title: {eq: "Path of Exile"}}) {
    nodes {
      title
      achievements {
        name
        percent
      }
    }
  }
}
`
