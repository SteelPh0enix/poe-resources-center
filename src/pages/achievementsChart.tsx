import { graphql } from 'gatsby'
import * as React from 'react'
import MainLayout from '../layouts/mainLayout'
import { GetPoEAchievementsStatsQuery } from '../../graphql-types'
import styled from 'styled-components'

const ModifiedDateSubtext = styled.div`
  font-size: smaller;
  font-style: italic;
`

const PoEAchievementsStatsTable = styled.table`
  width: 50ch;
`

export default function AchievementsChartPage ({ data }: {data: GetPoEAchievementsStatsQuery}): React.ReactElement {
  return (
    <MainLayout>
      <PoEAchievementsStatsTable>
        <caption>
          PoE achievements and % of Steam playerbase which achieved them
          <ModifiedDateSubtext>Data fetched from Steam API @ {data.currentBuildDate?.currentDate}</ModifiedDateSubtext>
        </caption>

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
      </PoEAchievementsStatsTable>
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
  currentBuildDate {
    currentDate
  }
}
`
