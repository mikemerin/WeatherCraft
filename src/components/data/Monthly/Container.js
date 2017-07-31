import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import { MonthliesAdapter } from '../../../adapters'

// helpers
import { DateParser } from '../../helpers/DateParser'

// outputs
import Inclement from './Inclement'
import Temperatures from './Temperatures'
import Precip from './Precip'
import Sun from './Sun'
import Winds from './Winds'

import Graph from './Graph'

export default class Monthly extends Component {

  constructor() {
    super()
    this.state = {
      wban: '', year_month: '',
      avg_max_temp: '', avg_min_temp: '', avg_temp: '',
      date_max24_hr_precip: '', date_max24_hr_snowfall: '',
      days_with_precip_ge_p01inch: '', days_with_precip_ge_p10inch: '',
      days_with_snowfall_ge_1p0inch: '', departure_from_normal: '',
      departure_from_normal_precip: '', departure_max_temp: '', departure_min_temp: '',
      max24_hr_precip: '', max24_hr_snowfall: '', total_monthly_precip: '', total_snowfall: ''
    }

  }

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    MonthliesAdapter.station_adjacent(nextProps.station.wban, nextProps.date)
    .then(data => {
      debugger
      console.log("monthly cwrp")

      if (data[5] !== null && data[5] !== undefined) {

        const { wban, year_month, created_at, updated_at,
          avg_max_temp, avg_min_temp, avg_temp,
          date_max24_hr_precip, date_max24_hr_snowfall,
          days_with_precip_ge_p01inch, days_with_precip_ge_p10inch,
          days_with_snowfall_ge_1p0inch, departure_from_normal,
          departure_from_normal_precip, departure_max_temp, departure_min_temp,
          max24_hr_precip, max24_hr_snowfall, total_monthly_precip, total_snowfall } = data[5]

        const pre5_year_month = data[0].year_month, pre5_avg_max_temp = parseFloat(data[0].avg_max_temp), pre5_avg_min_temp = parseFloat(data[0].avg_min_temp),
            pre5_avg_temp = parseFloat(data[0].avg_temp), pre5_total_monthly_precip = parseFloat(data[0].total_monthly_precip), pre5_total_snowfall = parseFloat(data[0].total_snowfall)
        const pre4_year_month = data[1].year_month, pre4_avg_max_temp = parseFloat(data[1].avg_max_temp), pre4_avg_min_temp = parseFloat(data[1].avg_min_temp),
            pre4_avg_temp = parseFloat(data[1].avg_temp), pre4_total_monthly_precip = parseFloat(data[1].total_monthly_precip), pre4_total_snowfall = parseFloat(data[1].total_snowfall)
        const pre3_year_month = data[2].year_month, pre3_avg_max_temp = parseFloat(data[2].avg_max_temp), pre3_avg_min_temp = parseFloat(data[2].avg_min_temp),
            pre3_avg_temp = parseFloat(data[2].avg_temp), pre3_total_monthly_precip = parseFloat(data[2].total_monthly_precip), pre3_total_snowfall = parseFloat(data[2].total_snowfall)
        const pre2_year_month = data[3].year_month, pre2_avg_max_temp = parseFloat(data[3].avg_max_temp), pre2_avg_min_temp = parseFloat(data[3].avg_min_temp),
            pre2_avg_temp = parseFloat(data[3].avg_temp), pre2_total_monthly_precip = parseFloat(data[3].total_monthly_precip), pre2_total_snowfall = parseFloat(data[3].total_snowfall)
        const pre1_year_month = data[4].year_month, pre1_avg_max_temp = parseFloat(data[4].avg_max_temp), pre1_avg_min_temp = parseFloat(data[4].avg_min_temp),
            pre1_avg_temp = parseFloat(data[4].avg_temp), pre1_total_monthly_precip = parseFloat(data[4].total_monthly_precip), pre1_total_snowfall = parseFloat(data[4].total_snowfall)
        const post1_year_month = data[6].year_month, post1_avg_max_temp = parseFloat(data[6].avg_max_temp), post1_avg_min_temp = parseFloat(data[6].avg_min_temp),
            post1_avg_temp = parseFloat(data[6].avg_temp), post1_total_monthly_precip = parseFloat(data[6].total_monthly_precip), post1_total_snowfall = parseFloat(data[6].total_snowfall)
        const post2_year_month = data[7].year_month, post2_avg_max_temp = parseFloat(data[7].avg_max_temp), post2_avg_min_temp = parseFloat(data[7].avg_min_temp),
            post2_avg_temp = parseFloat(data[7].avg_temp), post2_total_monthly_precip = parseFloat(data[7].total_monthly_precip), post2_total_snowfall = parseFloat(data[7].total_snowfall)
        const post3_year_month = data[8].year_month, post3_avg_max_temp = parseFloat(data[8].avg_max_temp), post3_avg_min_temp = parseFloat(data[8].avg_min_temp),
            post3_avg_temp = parseFloat(data[8].avg_temp), post3_total_monthly_precip = parseFloat(data[8].total_monthly_precip), post3_total_snowfall = parseFloat(data[8].total_snowfall)
        const post4_year_month = data[9].year_month, post4_avg_max_temp = parseFloat(data[9].avg_max_temp), post4_avg_min_temp = parseFloat(data[9].avg_min_temp),
            post4_avg_temp = parseFloat(data[9].avg_temp), post4_total_monthly_precip = parseFloat(data[9].total_monthly_precip), post4_total_snowfall = parseFloat(data[9].total_snowfall)
        const post5_year_month = data[10].year_month, post5_avg_max_temp = parseFloat(data[10].avg_max_temp), post5_avg_min_temp = parseFloat(data[10].avg_min_temp),
            post5_avg_temp = parseFloat(data[10].avg_temp), post5_total_monthly_precip = parseFloat(data[10].total_monthly_precip), post5_total_snowfall = parseFloat(data[10].total_snowfall)

        const unused = [created_at, updated_at]

        this.setState({ wban: wban, year_month: year_month,
          avg_max_temp: avg_max_temp, avg_min_temp: avg_min_temp, avg_temp: avg_temp,
          date_max24_hr_precip: date_max24_hr_precip, date_max24_hr_snowfall: date_max24_hr_snowfall,
          days_with_precip_ge_p01inch: days_with_precip_ge_p01inch, days_with_precip_ge_p10inch: days_with_precip_ge_p10inch,
          days_with_snowfall_ge_1p0inch: days_with_snowfall_ge_1p0inch, departure_from_normal: departure_from_normal,
          departure_from_normal_precip: departure_from_normal_precip, departure_max_temp: departure_max_temp, departure_min_temp: departure_min_temp,
          max24_hr_precip: max24_hr_precip, max24_hr_snowfall: max24_hr_snowfall, total_monthly_precip: total_monthly_precip, total_snowfall: total_snowfall,
          pre5_year_month: pre5_year_month, pre5_avg_max_temp: pre5_avg_max_temp, pre5_avg_min_temp: pre5_avg_min_temp, pre5_avg_temp: pre5_avg_temp, pre5_total_monthly_precip: pre5_total_monthly_precip, pre5_total_snowfall: pre5_total_snowfall,
          pre4_year_month: pre4_year_month, pre4_avg_max_temp: pre4_avg_max_temp, pre4_avg_min_temp: pre4_avg_min_temp, pre4_avg_temp: pre4_avg_temp, pre4_total_monthly_precip: pre4_total_monthly_precip, pre4_total_snowfall: pre4_total_snowfall,
          pre3_year_month: pre3_year_month, pre3_avg_max_temp: pre3_avg_max_temp, pre3_avg_min_temp: pre3_avg_min_temp, pre3_avg_temp: pre3_avg_temp, pre3_total_monthly_precip: pre3_total_monthly_precip, pre3_total_snowfall: pre3_total_snowfall,
          pre2_year_month: pre2_year_month, pre2_avg_max_temp: pre2_avg_max_temp, pre2_avg_min_temp: pre2_avg_min_temp, pre2_avg_temp: pre2_avg_temp, pre2_total_monthly_precip: pre2_total_monthly_precip, pre2_total_snowfall: pre2_total_snowfall,
          pre1_year_month: pre1_year_month, pre1_avg_max_temp: pre1_avg_max_temp, pre1_avg_min_temp: pre1_avg_min_temp, pre1_avg_temp: pre1_avg_temp, pre1_total_monthly_precip: pre1_total_monthly_precip, pre1_total_snowfall: pre1_total_snowfall,
          post1_year_month: post1_year_month, post1_avg_max_temp: post1_avg_max_temp, post1_avg_min_temp: post1_avg_min_temp, post1_avg_temp: post1_avg_temp, post1_total_monthly_precip: post1_total_monthly_precip, post_1_total_snowfall: post_1_total_snowfall,
          post2_year_month: post2_year_month, post2_avg_max_temp: post2_avg_max_temp, post2_avg_min_temp: post2_avg_min_temp, post2_avg_temp: post2_avg_temp, post2_total_monthly_precip: post2_total_monthly_precip, post_2_total_snowfall: post_2_total_snowfall,
          post3_year_month: post3_year_month, post3_avg_max_temp: post3_avg_max_temp, post3_avg_min_temp: post3_avg_min_temp, post3_avg_temp: post3_avg_temp, post3_total_monthly_precip: post3_total_monthly_precip, post_3_total_snowfall: post_3_total_snowfall,
          post4_year_month: post4_year_month, post4_avg_max_temp: post4_avg_max_temp, post4_avg_min_temp: post4_avg_min_temp, post4_avg_temp: post4_avg_temp, post4_total_monthly_precip: post4_total_monthly_precip, post_4_total_snowfall: post_4_total_snowfall,
          post5_year_month: post5_year_month, post5_avg_max_temp: post5_avg_max_temp, post5_avg_min_temp: post5_avg_min_temp, post5_avg_temp: post5_avg_temp, post5_total_monthly_precip: post5_total_monthly_precip post_5_total_snowfall: post_5_total_snowfall
        })
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

        <Graph data={this.state} />

      </div>
    )
  }
}
