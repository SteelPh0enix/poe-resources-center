import { graphql } from 'gatsby'
import * as React from 'react'
import MainLayout from '../layouts/mainLayout'
import { GetPoEAchievementsStatsQuery } from '../../graphql-types'
import styled from 'styled-components'
import SortableTable, { TableColumn, TableRow } from '../components/sortableTable'

const ModifiedDateSubtext = styled.div`
  font-size: smaller;
  font-style: italic;
  padding-bottom: 5px;
`

const PoEAchievementsStatsTable = styled(SortableTable)`
  width: 50ch;
`

export default function AchievementsChartPage ({ data }: {data: GetPoEAchievementsStatsQuery}): React.ReactElement {
  const caption = (
    <div>
      PoE Achievements statistics
      <ModifiedDateSubtext>Last update @ {data?.currentBuildDate?.currentDate}</ModifiedDateSubtext>
    </div>
  )

  const columns: TableColumn[] = [
    {
      header: 'No.',
      id: 'no-of-row'
    }, {
      header: 'Name',
      id: 'achievement-name'
    }, {
      header: '% of playerbase',
      id: 'percent-of-players'
    }
  ]

  const rows: TableRow[] = data.gameAchievements?.achievements
    ? data?.gameAchievements?.achievements?.map(achievement => {
      return {
        values: [achievement?.id, achievement?.data?.name, achievement?.data?.percent?.toFixed(1) + '%'],
        id: achievement?.id ? achievement.id.toString() : ''
      }
    })
    : []

  console.log(rows)

  const tableDataProps = {
    columns,
    rows
  }

  return (
    <MainLayout>
      <PoEAchievementsStatsTable caption={caption} tableData={tableDataProps}/>
    </MainLayout>
  )
}

export const query = graphql`
query GetPoEAchievementsStats {
  gameAchievements(title: {eq: "Path of Exile"}) {
    achievements {
      data {
        percent
        name
      }
      id
    }
  }
  currentBuildDate {
    currentDate
  }
}
`
