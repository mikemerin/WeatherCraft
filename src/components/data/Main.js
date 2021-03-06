import React, { Component } from 'react'
import { Icon, Statistic, Grid, Segment } from 'semantic-ui-react'

import { DailiesAdapter } from '../../adapters'
// import { united_states, other_states } from '../helpers/StateChoices'
import { DateParser } from '../helpers/DateParser'
import { WindDirection } from '../helpers/WindDirection'

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

      let precip_total_1 = `${precip_total}"`
      let snow_fall_1 = `${snow_fall}"`
      let depth_1 = `${depth}"`

      let code_sum_1 = code_sum === " " ? "N/A" : code_sum.split(" ").join(" | ")
      // let state_full = united_states.find(x => x.value === "NY").text.toUpperCase()

      let tmax_1 = `${tmax}ºF`
      let tmin_1 = `${tmin}ºF`
      let tavg_1 = `${tavg}ºF`
      let dew_point_1 = `${dew_point}ºF`
      let depart_1 = `${depart}ºF`

      let sunrise_1 = `${sunrise.slice(0,2)}:${sunrise.slice(2,4)}`
      let sunset_1 = `${sunset.slice(0,2)}:${sunset.slice(2,4)}`

      // let avg = typeof avg_speed === "undefined" ? "N/A" : `${avg_speed} MPH`
      let max2 = `${max2_speed} MPH ${WindDirection(max2_dir)}`
      let max5 = `${max5_speed} MPH ${WindDirection(max5_dir)}`

      let date = this.props.date
      let year_month_day_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}, ${date.slice(0,4)}`

    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Statistic>
                <Statistic.Value>
                  <Icon name='rain' />
                    { precip_total_1 }
                </Statistic.Value>
                <Statistic.Label>Precip</Statistic.Label>
              </Statistic>
            </Segment>
            <Segment>
              <Statistic>
                <Statistic.Value>
                  <Icon name='snowflake outline' />
                    { snow_fall_1 }
                </Statistic.Value>
                <Statistic.Label>Snowfall</Statistic.Label>
              </Statistic>
              <div>Snow Depth: { depth_1 } </div>
            </Segment>
            <Segment>
              <div>Inclement Weather:</div>
              <div> { code_sum_1 } </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div>Weather for:</div>
              <div> { year_month_day_1 } </div>
              <br></br>
              <div>High: { tmax_1 } </div>
              <div>Low: { tmin_1 } </div>
              <div>Average: { tavg_1 } </div>
              <div>Dew Point: { dew_point_1 } </div>
              <div>Departure: { depart_1 } </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div>Sunrise: { sunrise_1 }</div>
              <div>Sunset: { sunset_1 }</div>
            </Segment>
            <Segment>
              <div>Winds:</div>
              <div>Average: { avg_speed } </div>
              <div>Highest: { max5 } </div>
              <div>Top Gust: { max2 } </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
