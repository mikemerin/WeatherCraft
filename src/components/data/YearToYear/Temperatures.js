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
  let min_low = ` LOADING`
  let max_low = ` LOADING`
  let avg_low = ` LOADING`
  let min_low_i = ''
  let max_low_i = ''
  if (min_a.filter(x => x).length > 0) {
    let min = min_a.filter(x => x)
    min_low = Math.min(...min)
    max_low = Math.max(...min)
    min_low_i = min_a.indexOf(min_low)
    max_low_i = min_a.indexOf(max_low)
    min_low = ` ${min_low}ºF (${years[min_low_i]})`
    max_low = ` ${max_low}ºF (${years[max_low_i]})`
    avg_low = ` ${( min.reduce((sum, x) => sum + x ) / min.length ).toFixed(2)}ºF`
  }

  const avg_a = [o07_tavg, o08_tavg, o09_tavg, o10_tavg, o11_tavg, o12_tavg, o13_tavg, o14_tavg, o15_tavg, o16_tavg, o17_tavg].filter(x => x)
  let avg = ' LOADING'
  if (avg_a.length > 0 ) { avg = ` ${(avg_a.reduce((sum,x) => sum+x) / avg_a.length).toFixed(2)}ºF` }

  const max_a = [o07_tmax, o08_tmax, o09_tmax, o10_tmax, o11_tmax, o12_tmax, o13_tmax, o14_tmax, o15_tmax, o16_tmax, o17_tmax]
  let min_high = ` LOADING`
  let max_high = ` LOADING`
  let avg_high = ` LOADING`
  let min_high_i = ''
  let max_high_i = ''
  if (max_a.filter(x => x).length > 0) {
    let max = max_a.filter(x => x)
    min_high = Math.min(...max)
    max_high = Math.max(...max)
    min_high_i = max_a.indexOf(min_high)
    max_high_i = max_a.indexOf(max_high)
    min_high = ` ${min_high}ºF (${years[min_high_i]})`
    max_high = ` ${max_high}ºF (${years[max_high_i]})`
    avg_high = ` ${( max.reduce((sum, x) => sum + x ) / max.length ).toFixed(2)}ºF`
  }

  return (
    <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">
      <Grid.Row>
        <Grid.Column>
          <Statistic size='mini'>
            <Statistic.Value>
              <Icon name='thermometer empty' />
                { min_low }
              </Statistic.Value>
            <Statistic.Label>Lowest Min</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <h1><strong> { props.month_day_1 } </strong></h1>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='mini'>
            <Statistic.Value>
              <Icon name='thermometer full' />
                { max_high }
              </Statistic.Value>
            <Statistic.Label>Highest Max</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Statistic size='mini'>
            <Statistic.Value>
              <Icon name='thermometer quarter' />
                { avg_low }
              </Statistic.Value>
            <Statistic.Label>Average Min</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='mini'>
            <Statistic.Value>
              <Icon name='thermometer half' />
                { avg }
              </Statistic.Value>
            <Statistic.Label>Average Temp</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='mini'>
            <Statistic.Value>
              <Icon name='thermometer three quarters' />
                { avg_high }
              </Statistic.Value>
            <Statistic.Label>Average Max</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <br />
        <h2>Year after Year</h2>
      </Grid.Row>
    </Grid>
  )
}
