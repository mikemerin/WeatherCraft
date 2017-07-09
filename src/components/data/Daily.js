import React, { Component } from 'react'
import { Icon, Statistic, Grid, Segment } from 'semantic-ui-react'

import { DailiesAdapter } from '../../adapters'
// import { united_states, other_states } from '../helpers/StateChoices'
import { DateParser } from '../helpers/DateParser'
import { WindDirection } from '../helpers/WindDirection'
import WeatherCodes from '../helpers/WeatherCodes'

export default class Daily extends Component {

  constructor() {
    super()
    this.state = {
      wban: '',
      year_month_day: '',
      precip_total: '', snow_fall: '', depth: '',
      code_sum: '',
      tmax: '', tmin: '', tavg: '', dew_point: '', depart: '',
      sunrise: '', sunset: '',
      max2_dir: '', max2_speed: '', max5_dir: '', max5_speed: '',
      result_dir: '', result_speed: '', avg_speed: ''
    }

  }

  // this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    DailiesAdapter.station_date(nextProps.station.wban, nextProps.date)
    .then(data => {
      console.log("daily cwrp")
      let { avg_speed, code_sum, created_at, depart, depth, dew_point,
        id, max2_dir, max2_speed, max5_dir, max5_speed, precip_total,
        result_dir, result_speed, snow_fall, sunrise, sunset,
        tavg, tmax, tmin, updated_at, wban, year_month_day } = data[0]

        let unused = [id, created_at, updated_at]

      this.setState({ avg_speed: avg_speed, code_sum: code_sum, depart: depart,
        depth: depth, dew_point: dew_point, max2_dir: max2_dir,
        max2_speed: max2_speed, max5_dir: max5_dir, max5_speed: max5_speed,
        precip_total: precip_total, result_dir: result_dir,
        result_speed: result_speed, snow_fall: snow_fall, sunrise: sunrise,
        sunset: sunset, tavg: tavg, tmax: tmax, tmin: tmin,
        wban: wban, year_month_day: year_month_day })

    })
  }

  render() {

    const { avg_speed, code_sum, depart, depth, dew_point,
      id, max2_dir, max2_speed, max5_dir, max5_speed, precip_total,
      result_dir, result_speed, snow_fall, sunrise, sunset,
      tavg, tmax, tmin, wban, year_month_day } = this.state

      let ununsed = [id, result_dir, result_speed, wban, year_month_day]

      let precip_total_1 = ` ${precip_total}"`
      let snow_fall_1 = ` ${snow_fall}"`
      let depth_1 = ` ${depth}"`

      let code_sum_1 = code_sum === " " ? "N/A" : code_sum.split(" ").join(" | ")
      // let state_full = united_states.find(x => x.value === "NY").text.toUpperCase()

      let tmax_1 = ` ${tmax}ºF`
      let tmin_1 = ` ${tmin}ºF`
      let tavg_1 = ` ${tavg}ºF`
      let dew_point_1 = ` ${dew_point}ºF`
      let depart_1 = ` ${depart}ºF`

      let sunrise_1 = ` ${sunrise.slice(0,2)}:${sunrise.slice(2,4)}`
      let sunset_1 = ` ${sunset.slice(0,2)}:${sunset.slice(2,4)}`

      let avg_speed_1 = ` ${avg_speed} MPH`
      let max2 = ` ${max2_speed} MPH ${WindDirection(max2_dir)}`
      let max5 = ` ${max5_speed} MPH ${WindDirection(max5_dir)}`

      let date = this.props.date
      let year_month_day_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}, ${date.slice(0,4)}`

    return (
      <Grid columns={3} divided textAlign="center">
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='rain' />
                    { precip_total_1 }
                  </Statistic.Value>
                <Statistic.Label>Precip</Statistic.Label>
              </Statistic>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='snowflake outline' />
                    { snow_fall_1 }
                  </Statistic.Value>
                <Statistic.Label>Snowfall</Statistic.Label>
              </Statistic>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='resize vertical' />
                    { depth_1 }
                  </Statistic.Value>
                <Statistic.Label>Snow Depth</Statistic.Label>
              </Statistic>
            </Segment>
            <Segment>
              <div>Inclement Weather:</div>
              <div> { code_sum_1 } </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h4>Weather for:</h4>
              <h2><strong> { year_month_day_1 } </strong></h2>
            </Segment>
            <Segment>
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
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon.Group>
                    <Icon name='sun' />
                    <Icon corner name='chevron circle up' />
                  </Icon.Group>
                    { sunrise_1 }
                  </Statistic.Value>
                <Statistic.Label>Sunrise</Statistic.Label>
              </Statistic>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon.Group>
                    <Icon name='sun' />
                    <Icon corner name='chevron circle down' />
                  </Icon.Group>
                    { sunset_1 }
                  </Statistic.Value>
                <Statistic.Label>Sunset</Statistic.Label>
              </Statistic>
            </Segment>
            <Segment>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='flag outline' />
                    { avg_speed_1 }
                  </Statistic.Value>
                <Statistic.Label>Average Winds</Statistic.Label>
              </Statistic>
              <div>Highest: { max2 } </div>
              <div>Top Gust: { max5 } </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
