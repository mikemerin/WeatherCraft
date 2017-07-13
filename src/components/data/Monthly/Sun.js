import React from 'react'
import { Icon, Statistic, Grid, Segment } from 'semantic-ui-react'

import { Time24to12 } from '../../helpers/Time24to12'

export default function Sun(props) {

  const { sunrise, sunset } = props

  let sunrise_1 = Time24to12(sunrise)
  let sunset_1 = Time24to12(sunset)

  return (
    <Grid.Column>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon.Group>
            <Icon name='sun' color="orange" />
            <Icon corner name='chevron circle up' color="red" />
          </Icon.Group>
            { sunrise_1 }
          </Statistic.Value>
        <Statistic.Label>Sunrise</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon.Group>
            <Icon name='sun' color="orange" />
            <Icon corner name='chevron circle down' color="red" />
          </Icon.Group>
            { sunset_1 }
          </Statistic.Value>
        <Statistic.Label>Sunset</Statistic.Label>
      </Statistic>
    </Grid.Column>
  )
}
