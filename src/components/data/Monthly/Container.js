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
      wban: '',
      year_month: '',

      avg_max_temp: '', avg_min_temp: '', avg_temp: '',
      departure_max_temp: '', departure_min_temp: '', departure_from_normal: '',

      total_monthly_precip: '', departure_from_normal_precip: '',
      max24_hr_precip: '', date_max24_hr_precip: '',
      total_snowfall: '', max24_hr_snowfall: '', date_max24_hr_snowfall: '',
      days_with_precip_ge_p01inch: '',
      days_with_precip_ge_p10inch: '',
      days_with_snowfall_ge_1p0inch: ''
    }

  }

  // CSU

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    if (this.props.station.latitude !== 0) {
      MonthliesAdapter.station_date(this.props.station.wban, this.props.date)
      .then(data => {
        debugger
        console.log("daily components will receive props")

        if (data[0] !== null && data[0] !== undefined) {

          const { wban, year_month, avg_max_temp, avg_min_temp, avg_temp,
            departure_max_temp, departure_min_temp, departure_from_normal,
            total_monthly_precip, departure_from_normal_precip,
            max24_hr_precip, date_max24_hr_precip, total_snowfall,
            max24_hr_snowfall, date_max24_hr_snowfall, days_with_precip_ge_p01inch,
            days_with_precip_ge_p10inch, days_with_snowfall_ge_1p0inch } = data[0]

          this.setState({ wban: wban, year_month: year_month, avg_max_temp: avg_max_temp,
            avg_min_temp: avg_min_temp, avg_temp: avg_temp, departure_max_temp: departure_max_temp,
            departure_min_temp: departure_min_temp, departure_from_normal: departure_from_normal,

            total_monthly_precip: total_monthly_precip,
            departure_from_normal_precip: departure_from_normal_precip,
            max24_hr_precip: max24_hr_precip, date_max24_hr_precip: date_max24_hr_precip,
            total_snowfall: total_snowfall, max24_hr_snowfall: max24_hr_snowfall,
            date_max24_hr_snowfall: date_max24_hr_snowfall,
            days_with_precip_ge_p01inch: days_with_precip_ge_p01inch,
            days_with_precip_ge_p10inch: days_with_precip_ge_p10inch,
            days_with_snowfall_ge_1p0inch: days_with_snowfall_ge_1p0inch

          })
        } else {
          alert("Sorry, no data was found for this date and location, please try again")
        }



      })
    }
  }

  render() {

    const { wban, year_month, avg_max_temp, avg_min_temp, avg_temp,
      departure_max_temp, departure_min_temp, departure_from_normal,
      total_monthly_precip, departure_from_normal_precip,
      max24_hr_precip, date_max24_hr_precip, total_snowfall,
      max24_hr_snowfall, date_max24_hr_snowfall, days_with_precip_ge_p01inch,
      days_with_precip_ge_p10inch, days_with_snowfall_ge_1p0inch } = this.state

      let date = this.props.date
      debugger
      let year_month_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}, ${date.slice(0,4)}`

    return (
      <div>
        <br />
        <br />


      </div>
    )
  }
}


// <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">
//
//   <Grid.Row>
//     <Inclement code_sum={code_sum} />
//     <Grid.Column>
//       <h1><strong> { year_month_day_1 } </strong></h1>
//     </Grid.Column>
//     <Temperatures tmax={tmax} tmin={tmin} tavg={tavg} dew_point={dew_point} depart={depart} />
//   </Grid.Row>
//
//   <Grid.Row>
//     <Precip precip_total={precip_total} snow_fall={snow_fall} depth={depth}/>
//     <Sun sunrise={sunrise} sunset={sunset} />
//     <Winds avg_speed={avg_speed} max2_speed={max2_speed} max5_speed={max5_speed} max2_dir={max2_dir} />
//   </Grid.Row>
//
// </Grid>
//
// <Graph data={this.state} />
