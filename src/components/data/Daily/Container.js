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
      result_dir: '', result_speed: '', avg_speed: '',

      pre3_tmax: '', pre3_tmin: '', pre3_tavg: '', pre3_precip_total: '',
      pre2_tmax: '', pre2_tmin: '', pre2_tavg: '', pre2_precip_total: '',
      pre1_tmax: '', pre1_tmin: '', pre1_tavg: '', pre1_precip_total: '',
      post1_tmax: '', post1_tmin: '', post1_tavg: '', post1_precip_total: '',
      post2_tmax: '', post2_tmin: '', post2_tavg: '', post2_precip_total: '',
      post3_tmax: '', post3_tmin: '', post3_tavg: '', post3_precip_total: ''
    }

  }

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    DailiesAdapter.entry_date(nextProps.station.wban, nextProps.date)
    .then(data => {
      // debugger
      console.log("daily cwrp")

      if (data[5] !== null && data[5] !== undefined) {

        const { avg_speed, code_sum, depart, depth, dew_point,
        max2_dir, max2_speed, max5_dir, max5_speed, precip_total,
        result_dir, result_speed, snow_fall, sunrise, sunset,
        tavg, tmax, tmin, wban, year_month_day } = data[5]

        const pre5_year_month_day = data[0].year_month_day, pre5_tmax = parseFloat(data[0].tmax), pre5_tmin = parseFloat(data[0].tmin), pre5_tavg = parseFloat(data[0].tavg), pre5_precip_total = parseFloat(data[0].precip_total)
        const pre4_year_month_day = data[1].year_month_day, pre4_tmax = parseFloat(data[1].tmax), pre4_tmin = parseFloat(data[1].tmin), pre4_tavg = parseFloat(data[1].tavg), pre4_precip_total = parseFloat(data[1].precip_total)
        const pre3_year_month_day = data[2].year_month_day, pre3_tmax = parseFloat(data[2].tmax), pre3_tmin = parseFloat(data[2].tmin), pre3_tavg = parseFloat(data[2].tavg), pre3_precip_total = parseFloat(data[2].precip_total)
        const pre2_year_month_day = data[3].year_month_day, pre2_tmax = parseFloat(data[3].tmax), pre2_tmin = parseFloat(data[3].tmin), pre2_tavg = parseFloat(data[3].tavg), pre2_precip_total = parseFloat(data[3].precip_total)
        const pre1_year_month_day = data[4].year_month_day, pre1_tmax = parseFloat(data[4].tmax), pre1_tmin = parseFloat(data[4].tmin), pre1_tavg = parseFloat(data[4].tavg), pre1_precip_total = parseFloat(data[4].precip_total)
        const post1_year_month_day = data[6].year_month_day, post1_tmax = parseFloat(data[6].tmax), post1_tmin = parseFloat(data[6].tmin), post1_tavg = parseFloat(data[6].tavg), post1_precip_total = parseFloat(data[6].precip_total)
        const post2_year_month_day = data[7].year_month_day, post2_tmax = parseFloat(data[7].tmax), post2_tmin = parseFloat(data[7].tmin), post2_tavg = parseFloat(data[7].tavg), post2_precip_total = parseFloat(data[7].precip_total)
        const post3_year_month_day = data[8].year_month_day, post3_tmax = parseFloat(data[8].tmax), post3_tmin = parseFloat(data[8].tmin), post3_tavg = parseFloat(data[8].tavg), post3_precip_total = parseFloat(data[8].precip_total)
        const post4_year_month_day = data[9].year_month_day, post4_tmax = parseFloat(data[9].tmax), post4_tmin = parseFloat(data[9].tmin), post4_tavg = parseFloat(data[9].tavg), post4_precip_total = parseFloat(data[9].precip_total)
        const post5_year_month_day = data[10].year_month_day, post5_tmax = parseFloat(data[10].tmax), post5_tmin = parseFloat(data[10].tmin), post5_tavg = parseFloat(data[10].tavg), post5_precip_total = parseFloat(data[10].precip_total)

        this.setState({ avg_speed: avg_speed, code_sum: code_sum, depart: depart,
          depth: depth, dew_point: dew_point, max2_dir: max2_dir,
          max2_speed: max2_speed, max5_dir: max5_dir, max5_speed: max5_speed,
          precip_total: precip_total, result_dir: result_dir,
          result_speed: result_speed, snow_fall: snow_fall, sunrise: sunrise,
          sunset: sunset, tavg: tavg, tmax: tmax, tmin: tmin,
          wban: wban, year_month_day: year_month_day,
          pre5_year_month_day: pre5_year_month_day, pre5_tmax: pre5_tmax, pre5_tmin: pre5_tmin, pre5_tavg: pre5_tavg, pre5_precip_total: pre5_precip_total,
          pre4_year_month_day: pre4_year_month_day, pre4_tmax: pre4_tmax, pre4_tmin: pre4_tmin, pre4_tavg: pre4_tavg, pre4_precip_total: pre4_precip_total,
          pre3_year_month_day: pre3_year_month_day, pre3_tmax: pre3_tmax, pre3_tmin: pre3_tmin, pre3_tavg: pre3_tavg, pre3_precip_total: pre3_precip_total,
          pre2_year_month_day: pre2_year_month_day, pre2_tmax: pre2_tmax, pre2_tmin: pre2_tmin, pre2_tavg: pre2_tavg, pre2_precip_total: pre2_precip_total,
          pre1_year_month_day: pre1_year_month_day, pre1_tmax: pre1_tmax, pre1_tmin: pre1_tmin, pre1_tavg: pre1_tavg, pre1_precip_total: pre1_precip_total,
          post1_year_month_day: post1_year_month_day, post1_tmax: post1_tmax, post1_tmin: post1_tmin, post1_tavg: post1_tavg, post1_precip_total: post1_precip_total,
          post2_year_month_day: post2_year_month_day, post2_tmax: post2_tmax, post2_tmin: post2_tmin, post2_tavg: post2_tavg, post2_precip_total: post2_precip_total,
          post3_year_month_day: post3_year_month_day, post3_tmax: post3_tmax, post3_tmin: post3_tmin, post3_tavg: post3_tavg, post3_precip_total: post3_precip_total,
          post4_year_month_day: post4_year_month_day, post4_tmax: post4_tmax, post4_tmin: post4_tmin, post4_tavg: post4_tavg, post4_precip_total: post4_precip_total,
          post5_year_month_day: post5_year_month_day, post5_tmax: post5_tmax, post5_tmin: post5_tmin, post5_tavg: post5_tavg, post5_precip_total: post5_precip_total

        })
      } else {
        alert("Sorry, no data was found for this date and location, please try again")
      }



    })
  }

  render() {

    const { avg_speed, code_sum, depart, depth, dew_point,
      max2_dir, max2_speed,max5_speed, precip_total, snow_fall,
      sunrise, sunset, tavg, tmax, tmin } = this.state

      let date = this.props.date
      let year_month_day_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}, ${date.slice(0,4)}`

    return (
      <div>
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

        <Graph data={this.state} />

      </div>
    )
  }
}
