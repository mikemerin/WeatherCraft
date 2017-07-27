import React from 'react'
import { Icon, Statistic, Grid } from 'semantic-ui-react'

export default function Temperatures(props) {

  let { o07_avg_min_temp, o08_avg_min_temp, o09_avg_min_temp, o10_avg_min_temp,
        o11_avg_min_temp, o12_avg_min_temp, o13_avg_min_temp, o14_avg_min_temp,
        o15_avg_min_temp, o16_avg_min_temp, o17_avg_min_temp,
        o07_avg_temp, o08_avg_temp, o09_avg_temp, o10_avg_temp,
        o11_avg_temp, o12_avg_temp, o13_avg_temp, o14_avg_temp,
        o15_avg_temp, o16_avg_temp, o17_avg_temp,
        o07_avg_max_temp, o08_avg_max_temp, o09_avg_max_temp, o10_avg_max_temp,
        o11_avg_max_temp, o12_avg_max_temp, o13_avg_max_temp, o14_avg_max_temp,
        o15_avg_max_temp, o16_avg_max_temp, o17_avg_max_temp } = props.data

  const years = ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']

  const min_a = [o07_avg_min_temp, o08_avg_min_temp, o09_avg_min_temp, o10_avg_min_temp, o11_avg_min_temp, o12_avg_min_temp, o13_avg_min_temp, o14_avg_min_temp, o15_avg_min_temp, o16_avg_min_temp, o17_avg_min_temp]
  let min_low = ` LOADING`
  let max_low = ` LOADING`
  let avg_low = ` LOADING`
  let min_low_i = ''
  let max_low_i = ''
  if (min_a.filter(x => x).length > 0) {
    min_low = Math.min(...min_a.filter(x => x))
    max_low = Math.max(...min_a)
    min_low_i = min_a.indexOf(min_low)
    max_low_i = min_a.indexOf(max_low)
    min_low = ` ${min_low}ºF (${years[min_low_i]})`
    max_low = ` ${max_low}ºF (${years[max_low_i]})`
    let min = min_a.filter(x => x)
    avg_low = ` ${( min.reduce((sum, x) => sum + x ) / min.length ).toFixed(2)}ºF`
  }

  const avg_a = [o07_avg_temp, o08_avg_temp, o09_avg_temp, o10_avg_temp, o11_avg_temp, o12_avg_temp, o13_avg_temp, o14_avg_temp, o15_avg_temp, o16_avg_temp, o17_avg_temp].filter(x => x)
  let avg = ' LOADING'
  if (avg_a.length > 0 ) { avg = ` ${(avg_a.reduce((sum,x) => sum+x) / avg_a.length).toFixed(2)}ºF` }

  const max_a = [o07_avg_max_temp, o08_avg_max_temp, o09_avg_max_temp, o10_avg_max_temp, o11_avg_max_temp, o12_avg_max_temp, o13_avg_max_temp, o14_avg_max_temp, o15_avg_max_temp, o16_avg_max_temp, o17_avg_max_temp]
  let min_high = ` LOADING`
  let max_high = ` LOADING`
  let avg_high = ` LOADING`
  let min_high_i = ''
  let max_high_i = ''
  if (max_a.filter(x => x).length > 0) {
    min_high = Math.min(...max_a.filter(x => x))
    max_high = Math.max(...max_a)
    min_high_i = max_a.indexOf(min_high)
    max_high_i = max_a.indexOf(max_high)
    min_high = ` ${min_high}ºF (${years[min_high_i]})`
    max_high = ` ${max_high}ºF (${years[max_high_i]})`
    let max = max_a.filter(x => x)
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
            <Statistic.Label>Lowest Average Min</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <h1><strong> { props.month_1 } </strong></h1>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='mini'>
            <Statistic.Value>
              <Icon name='thermometer full' />
                { max_high }
              </Statistic.Value>
            <Statistic.Label>Highest Average Max</Statistic.Label>
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
