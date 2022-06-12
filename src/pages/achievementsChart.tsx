import { graphql } from 'gatsby'
import * as React from 'react'
import MainLayout from '../layouts/mainLayout'
import { GetPoEAchievementsStatsQuery } from '../../graphql-types'

export default function AchievementsChartPage ({ data }: {data: GetPoEAchievementsStatsQuery}): React.ReactElement {
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
            data?.gameAchievements?.achievements?.map((achievement, index) => (
              <tr key={index}>
                <td>{achievement?.name}</td>
                <td>{achievement?.percent?.toFixed(1)}%</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </MainLayout>
  )
}

export const query = graphql`
query GetPoEAchievementsStats {
  gameAchievements(title: {eq: "Path of Exile"}) {
    achievements {
      name
      percent
    }
  }
}

`
