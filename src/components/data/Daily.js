import React, { Component } from 'react'
import { Icon, Statistic, Grid, Segment } from 'semantic-ui-react'

import { DailiesAdapter } from '../../adapters'
// import { united_states, other_states } from '../helpers/StateChoices'
import { DateParser } from '../helpers/DateParser'
import { WindDirection } from '../helpers/WindDirection'
import { WC } from '../helpers/WeatherCodes'
import { Time24to12 } from '../helpers/Time24to12'

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
      console.log("daily components will receive props")
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

      // console.log(code_sum)

      let code_sum_1
      if (code_sum === " ")
        { code_sum_1 = "N/A" }
      else
        { code_sum_1 = code_sum.split(" ").map(x => {
        switch (x.length) {
          case 2: return WC[x]
          case 3: return `${WC[x.slice(2,3)]} ${WC[x.slice(0,2)]}`
          case 4: return `${WC[x.slice(0,2)]} ${WC[x.slice(2,4)]}`
        }
      }).join(", ") }
      // let state_full = united_states.find(x => x.value === "NY").text.toUpperCase()

      let tmax_1 = ` ${tmax}ºF`
      let tmin_1 = ` ${tmin}ºF`
      let tavg_1 = ` ${tavg}ºF`
      let dew_point_1 = ` ${dew_point}ºF`
      let depart_1 = ` ${depart}ºF`

      // let sunrise_1 = ` ${sunrise.slice(0,2)}:${sunrise.slice(2,4)}`
      let sunrise_1 = Time24to12(sunrise)
      let sunset_1 = Time24to12(sunset)

      let avg = ` ${avg_speed} MPH ${WindDirection(max2_dir)}`
      let max2 = `${max2_speed} `
      let max5 = ` ${max5_speed}`

      let date = this.props.date
      let year_month_day_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}, ${date.slice(0,4)}`

    return (
      <div>
        <br />
        <br />
        <Grid columns={3} relaxed="true" celled='internally' textAlign="center" verticalAlign="middle">

          <Grid.Row>

            <Grid.Column>
              <h3>Inclement Weather:</h3>
              <h4> { code_sum_1 } </h4>
            </Grid.Column>

            <Grid.Column>
              <h1><strong> { year_month_day_1 } </strong></h1>
            </Grid.Column>

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

          </Grid.Row>

          <Grid.Row>

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

            <Grid.Column>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon.Group>
                    <Icon name='sun' color="orange" />
                    <Icon corner name='chevron circle up' color="yellow" />
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
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
