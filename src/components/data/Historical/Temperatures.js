import React from 'react'
import { Icon, Statistic, Grid } from 'semantic-ui-react'

export default function Temperatures(props) {

  const { tmax, tmin, tavg, dew_point, depart } = props

  let tmax_1 = ` ${tmax}ºF`
  let tmin_1 = ` ${tmin}ºF`
  let tavg_1 = ` ${tavg}ºF`
  let dew_point_1 = ` ${dew_point}ºF`
  let depart_1 = ` ${depart}ºF`

  return (
    <Grid.Column>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='thermometer full' />
            { tmax_1 }
          </Statistic.Value>
        <Statistic.Label>High</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='thermometer half' />
            { tavg_1 }
          </Statistic.Value>
        <Statistic.Label>Average</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='thermometer empty' />
            { tmin_1 }
          </Statistic.Value>
        <Statistic.Label>Low</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='eyedropper' />
            { dew_point_1 }
          </Statistic.Value>
        <Statistic.Label>Dew Point</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='sort' />
            { depart_1 }
          </Statistic.Value>
        <Statistic.Label>Departure</Statistic.Label>
      </Statistic>
    </Grid.Column>
  )
}
