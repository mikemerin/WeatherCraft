import React from 'react'
import { Icon, Statistic, Grid } from 'semantic-ui-react'

import { WindDirection } from '../../helpers/WindDirection'

export default function Winds(props) {

  const { avg_speed, max2_speed, max5_speed, max2_dir } = props

  let avg = ` ${avg_speed} MPH ${WindDirection(max2_dir)}`
  let max2 = `${max2_speed} `
  let max5 = ` ${max5_speed}`

  return (
    <Grid.Column>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='flag outline' />
            { avg }
          </Statistic.Value>
        <Statistic.Label>Average Winds</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
            { max2 }
          <Icon name='flag' color="red" />
            { max5 }
          </Statistic.Value>
        <Statistic.Label>Top Wind / Gust</Statistic.Label>
      </Statistic>
    </Grid.Column>
  )
}
