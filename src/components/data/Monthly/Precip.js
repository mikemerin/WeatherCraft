import React from 'react'
import { Icon, Statistic, Grid, Segment } from 'semantic-ui-react'

export default function Precip(props) {

  const { precip_total, snow_fall, depth } = props

  let precip_total_1 = (precip_total === "M" ? " M" : ` ${precip_total}"`)
  let snow_fall_1 = ` ${snow_fall}"`
  let depth_1 = ` ${depth}"`

  return (
    <Grid.Column>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='rain' color="blue" />
            { precip_total_1 }
          </Statistic.Value>
        <Statistic.Label>Precip</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='snowflake outline' color="blue" />
            { snow_fall_1 }
          </Statistic.Value>
        <Statistic.Label>Snowfall</Statistic.Label>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Value>
          <Icon name='resize vertical' color="blue" />
            { depth_1 }
          </Statistic.Value>
        <Statistic.Label>Snow Depth</Statistic.Label>
      </Statistic>
    </Grid.Column>
  )
}
