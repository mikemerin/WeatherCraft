import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import { DailiesAdapter } from '../../../adapters'

// helpers
import { DateParser } from '../../helpers/DateParser'

// outputs
import Inclement from './Inclement'
import Temperatures from './Temperatures'
import Precip from './Precip'
import Sun from './Sun'
import Winds from './Winds'

import Graph from './Graph'

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

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    DailiesAdapter.station_date(nextProps.station.wban, nextProps.date)
    .then(data => {
      // debugger
      console.log("daily components will receive props")
      // let avg_speed = code_sum = created_at = depart = depth = dew_point = id = max2_dir = max2_speed = max5_dir = max5_speed = precip_total = result_dir = result_speed = snow_fall = sunrise = sunset = tavg = tmax = tmin = updated_at = wban = year_month_day = "M"

      if (data[3] !== null || data[3] !== undefined) {

        let { avg_speed, code_sum, created_at, depart, depth, dew_point,
        id, max2_dir, max2_speed, max5_dir, max5_speed, precip_total,
        result_dir, result_speed, snow_fall, sunrise, sunset,
        tavg, tmax, tmin, updated_at, wban, year_month_day } = data[3]

        let unused = [id, created_at, updated_at]

        this.setState({ avg_speed: avg_speed, code_sum: code_sum, depart: depart,
          depth: depth, dew_point: dew_point, max2_dir: max2_dir,
          max2_speed: max2_speed, max5_dir: max5_dir, max5_speed: max5_speed,
          precip_total: precip_total, result_dir: result_dir,
          result_speed: result_speed, snow_fall: snow_fall, sunrise: sunrise,
          sunset: sunset, tavg: tavg, tmax: tmax, tmin: tmin,
          wban: wban, year_month_day: year_month_day })
      } else {
        alert("Sorry, no data was found for this date and location, please try again")
      }



    })
  }

  render() {

    const { avg_speed, code_sum, depart, depth, dew_point,
      id, max2_dir, max2_speed, max5_dir, max5_speed, precip_total,
      result_dir, result_speed, snow_fall, sunrise, sunset,
      tavg, tmax, tmin, wban, year_month_day } = this.state

      let ununsed = [id, result_dir, result_speed, wban, year_month_day, max5_dir]

      let date = this.props.date
      let year_month_day_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}, ${date.slice(0,4)}`

    return (
      <div>
        <br />
        <br />
        <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">

          <Grid.Row>
            <Inclement code_sum={code_sum} />
            <Grid.Column>
              <h1><strong> { year_month_day_1 } </strong></h1>
            </Grid.Column>
            <Temperatures tmax={tmax} tmin={tmin} tavg={tavg} dew_point={dew_point} depart={depart} />
          </Grid.Row>

          <Grid.Row>
            <Precip precip_total={precip_total} snow_fall={snow_fall} depth={depth}/>
            <Sun sunrise={sunrise} sunset={sunset} />
            <Winds avg_speed={avg_speed} max2_speed={max2_speed} max5_speed={max5_speed} max2_dir={max2_dir} />
          </Grid.Row>

        </Grid>

        <Graph station={this.props.station} />

      </div>
    )
  }
}
