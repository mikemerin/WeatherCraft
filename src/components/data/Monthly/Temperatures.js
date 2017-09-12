import React from 'react'
import { Icon, Statistic, Grid } from 'semantic-ui-react'

export default function Temperatures(props) {

  const { avg_max_temp, avg_min_temp, avg_temp,
          departure_max_temp, departure_min_temp,
          departure_from_normal } = props

  let avg_max_temp_1 = avg_max_temp === "M" ? " M" : ` ${avg_max_temp}ºF`
  let departure_max_temp_1 = departure_max_temp === "M" ? " M" : ( departure_max_temp > 0 ? ` +${departure_max_temp}ºF` : ` ${departure_max_temp}ºF` )
  // let normal_max_temp_1 = ( avg_max_temp === "M" || departure_max_temp === "M" ) ? " M" : ` ${parseFloat(avg_max_temp, 10) + parseFloat(departure_max_temp, 10)}ºF`

  let avg_min_temp_1 = avg_min_temp === "M" ? " M" : ` ${avg_min_temp}ºF`
  let departure_min_temp_1 = departure_min_temp === "M" ? " M" : ( departure_min_temp > 0 ? ` +${departure_min_temp}ºF` : ` ${departure_min_temp}ºF` )
  // let normal_min_temp_1 = ( avg_min_temp === "M" || departure_min_temp === "M" ) ? " M" : ` ${parseFloat(avg_min_temp, 10) + parseFloat(departure_min_temp, 10)}ºF`

  let avg_temp_1 = avg_temp === "M" ? " M" : ` ${avg_temp}ºF`
  let departure_from_normal_1 = departure_from_normal === "M" ? " M" : ( departure_from_normal > 0 ? ` +${departure_from_normal}ºF` : ` ${departure_from_normal}ºF` )
  // let normal_temp_1 = ( avg_temp === "M" || departure_from_normal === "M" ) ? " M" : ` ${parseFloat(avg_temp, 10) + parseFloat(departure_from_normal, 10)}ºF`

  return (
    <Grid.Column>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='thermometer empty' />
          { avg_min_temp_1 }
        </Statistic.Value>
        <Statistic.Label>Avg Low</Statistic.Label>
        <br />
        <Statistic.Value>
          <Icon name='sort' />
          { departure_min_temp_1 }
        </Statistic.Value>
        <Statistic.Label>Departure</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='thermometer half' />
          { avg_temp_1 }
        </Statistic.Value>
        <Statistic.Label>Average</Statistic.Label>
        <br />
        <Statistic.Value>
          <Icon name='sort' />
          { departure_from_normal_1 }
        </Statistic.Value>
        <Statistic.Label>Departure</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='thermometer full' />
          { avg_max_temp_1 }
        </Statistic.Value>
        <Statistic.Label>Avg High</Statistic.Label>
        <br />
        <Statistic.Value>
          <Icon name='sort' />
          { departure_max_temp_1 }
        </Statistic.Value>
        <Statistic.Label>Departure</Statistic.Label>
      </Statistic>
    </Grid.Column>
  )
}
