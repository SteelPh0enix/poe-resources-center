import { graphql } from 'gatsby'
import * as React from 'react'
import MainLayout from '../layouts/mainLayout'
import { GetPoEAchievementsStatsQuery } from '../../graphql-types'
import styled from 'styled-components'
import SortableTable, { TableColumn, TableRow } from '../components/sortableTable'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ModifiedDateSubtext = styled.div`
  font-size: smaller;
  font-style: italic;
  padding-bottom: 5px;
`

const PoEAchievementsStatsTable = styled(SortableTable)`
  width: 50ch;
`

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Hello, world!'
    }
  }
}

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
      id: 'no-of-row',
      inverseSortingByDefault: true
    }, {
      header: 'Name',
      id: 'achievement-name',
      inverseSortingByDefault: true
    }, {
      header: '% of playerbase',
      id: 'percent-of-players',
      valueDisplayFormatter: (value: number) => value.toFixed(1) + '%'
    }
  ]

  const rows: TableRow[] = data.gameAchievements?.achievements
    ? data?.gameAchievements?.achievements?.map(achievement => {
      return {
        values: [achievement?.id, achievement?.data?.name, achievement?.data?.percent],
        id: achievement?.id ? achievement.id.toString() : ''
      }
    })
    : []

  const tableDataProps = {
    columns,
    rows
  }

  const topAchievements = data?.gameAchievements?.achievements?.slice(0, 10) ?? []
  const chartLabels = topAchievements?.map(achievement => achievement?.data?.name) ?? null
  const chartDataset = {
    label: '% players',
    data: topAchievements?.map(achievement => achievement?.data?.percent) ?? [],
    borderColor: 'rgb(187, 0, 0)',
    backgroundColor: 'rgb(49, 37, 26)'
  }

  const chartData = {
    labels: chartLabels,
    datasets: [chartDataset]
  }

  return (
    <MainLayout>
      <Line options={chartOptions} data={chartData} />
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
