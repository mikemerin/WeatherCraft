import React from 'react'
import { Icon, Statistic, Grid } from 'semantic-ui-react'

export default function Temperatures(props) {

  let { o07_tmin, o08_tmin, o09_tmin, o10_tmin, o11_tmin,
        o12_tmin, o13_tmin, o14_tmin, o15_tmin, o16_tmin, o17_tmin,
        o07_tavg, o08_tavg, o09_tavg, o10_tavg, o11_tavg,
        o12_tavg, o13_tavg, o14_tavg, o15_tavg, o16_tavg, o17_tavg,
        o07_tmax, o08_tmax, o09_tmax, o10_tmax, o11_tmax,
        o12_tmax, o13_tmax, o14_tmax, o15_tmax, o16_tmax, o17_tmax } = props.data

  const years = ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']

  const min_a = [o07_tmin, o08_tmin, o09_tmin, o10_tmin, o11_tmin, o12_tmin, o13_tmin, o14_tmin, o15_tmin, o16_tmin, o17_tmin]
  let min = ` LOADING`
  let min_i = ''
  if (min_a.filter(x => x).length > 0) {
      min = Math.min(...min_a.filter(x => x))
      min_i = min_a.indexOf(min)
      min = ` ${min}ºF (${years[min_i]})`
  }

  const avg_a = [o07_tavg, o08_tavg, o09_tavg, o10_tavg, o11_tavg, o12_tavg, o13_tavg, o14_tavg, o15_tavg, o16_tavg, o17_tavg].filter(x => x)
  let avg = ' LOADING'
  if (avg_a.length > 0 ) { avg = ` ${(avg_a.reduce((sum,x) => sum+x) / avg_a.length).toFixed(2)}ºF` }

  const max_a = [o07_tmax, o08_tmax, o09_tmax, o10_tmax, o11_tmax, o12_tmax, o13_tmax, o14_tmax, o15_tmax, o16_tmax, o17_tmax]
  let max = ` LOADING`
  let max_i = ''
  if (max_a.filter(x => x).length > 0) {
      max = Math.max(...max_a.filter(x => x))
      max_i = max_a.indexOf(max)
      max = ` ${max}ºF (${years[max_i]})`
  }

  return (
    <Grid.Row>
      <Grid.Column>
        <Statistic size='mini'>
          <Statistic.Value>
            <Icon name='thermometer empty' />
              { min }
            </Statistic.Value>
          <Statistic.Label>Lowest</Statistic.Label>
        </Statistic>
      </Grid.Column>
      <Grid.Column>
        <Statistic size='mini'>
          <Statistic.Value>
            <Icon name='thermometer half' />
              { avg }
            </Statistic.Value>
          <Statistic.Label>Average</Statistic.Label>
        </Statistic>
      </Grid.Column>
      <Grid.Column>
        <Statistic size='mini'>
          <Statistic.Value>
            <Icon name='thermometer full' />
              { max }
            </Statistic.Value>
          <Statistic.Label>Highest</Statistic.Label>
        </Statistic>
      </Grid.Column>
    </Grid.Row>
  )
}
