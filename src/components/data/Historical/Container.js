import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import { DailiesAdapter } from '../../../adapters'

// helpers
import { DateParser } from '../../helpers/DateParser'

// outputs
// import Inclement from './Inclement'
// import Temperatures from './Temperatures'
// import Precip from './Precip'
// import Sun from './Sun'
// import Winds from './Winds'

import Graph from './Graph'

export default class Historical extends Component {

  constructor() {
    super()
    this.state = {
      length: 0,
      o07_year: '', o07_tmax: '', o07_tmin: '', o07_tavg: '',
      o08_year: '', o08_tmax: '', o08_tmin: '', o08_tavg: '',
      o09_year: '', o09_tmax: '', o09_tmin: '', o09_tavg: '',
      o10_year: '', o10_tmax: '', o10_tmin: '', o10_tavg: '',
      o11_year: '', o11_tmax: '', o11_tmin: '', o11_tavg: '',
      o12_year: '', o12_tmax: '', o12_tmin: '', o12_tavg: '',
      o13_year: '', o13_tmax: '', o13_tmin: '', o13_tavg: '',
      o14_year: '', o14_tmax: '', o14_tmin: '', o14_tavg: '',
      o15_year: '', o15_tmax: '', o15_tmin: '', o15_tavg: '',
      o16_year: '', o16_tmax: '', o16_tmin: '', o16_tavg: '',
      o17_year: '', o17_tmax: '', o17_tmin: '', o17_tavg: ''
    }

  }

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    DailiesAdapter.station_historical(nextProps.station.wban, nextProps.date)
    .then(data => {
      console.log("historical componentWillReceiveProps", this.state, this.props)

      if (data[0] !== null && data[0] !== undefined) {

        if (data.length === 10 && data[0].year_month_day[3] === "8") {
          let o08_year = data[0].year_month_day.slice(0,4), o08_tmax = parseInt(data[0].tmax, 10), o08_tmin = parseInt(data[0].tmin, 10), o08_tavg = parseInt(data[0].tavg, 10)
          let o09_year = data[1].year_month_day.slice(0,4), o09_tmax = parseInt(data[1].tmax, 10), o09_tmin = parseInt(data[1].tmin, 10), o09_tavg = parseInt(data[1].tavg, 10)
          let o10_year = data[2].year_month_day.slice(0,4), o10_tmax = parseInt(data[2].tmax, 10), o10_tmin = parseInt(data[2].tmin, 10), o10_tavg = parseInt(data[2].tavg, 10)
          let o11_year = data[3].year_month_day.slice(0,4), o11_tmax = parseInt(data[3].tmax, 10), o11_tmin = parseInt(data[3].tmin, 10), o11_tavg = parseInt(data[3].tavg, 10)
          let o12_year = data[4].year_month_day.slice(0,4), o12_tmax = parseInt(data[4].tmax, 10), o12_tmin = parseInt(data[4].tmin, 10), o12_tavg = parseInt(data[4].tavg, 10)
          let o13_year = data[5].year_month_day.slice(0,4), o13_tmax = parseInt(data[5].tmax, 10), o13_tmin = parseInt(data[5].tmin, 10), o13_tavg = parseInt(data[5].tavg, 10)
          let o14_year = data[6].year_month_day.slice(0,4), o14_tmax = parseInt(data[6].tmax, 10), o14_tmin = parseInt(data[6].tmin, 10), o14_tavg = parseInt(data[6].tavg, 10)
          let o15_year = data[7].year_month_day.slice(0,4), o15_tmax = parseInt(data[7].tmax, 10), o15_tmin = parseInt(data[7].tmin, 10), o15_tavg = parseInt(data[7].tavg, 10)
          let o16_year = data[8].year_month_day.slice(0,4), o16_tmax = parseInt(data[8].tmax, 10), o16_tmin = parseInt(data[8].tmin, 10), o16_tavg = parseInt(data[8].tavg, 10)
          let o17_year = data[9].year_month_day.slice(0,4), o17_tmax = parseInt(data[9].tmax, 10), o17_tmin = parseInt(data[9].tmin, 10), o17_tavg = parseInt(data[9].tavg, 10)


          this.setState({
            length: 10,
            o08_year: o08_year, o08_tmax: o08_tmax, o08_tmin: o08_tmin, o08_tavg: o08_tavg,
            o09_year: o09_year, o09_tmax: o09_tmax, o09_tmin: o09_tmin, o09_tavg: o09_tavg,
            o10_year: o10_year, o10_tmax: o10_tmax, o10_tmin: o10_tmin, o10_tavg: o10_tavg,
            o11_year: o11_year, o11_tmax: o11_tmax, o11_tmin: o11_tmin, o11_tavg: o11_tavg,
            o12_year: o12_year, o12_tmax: o12_tmax, o12_tmin: o12_tmin, o12_tavg: o12_tavg,
            o13_year: o13_year, o13_tmax: o13_tmax, o13_tmin: o13_tmin, o13_tavg: o13_tavg,
            o14_year: o14_year, o14_tmax: o14_tmax, o14_tmin: o14_tmin, o14_tavg: o14_tavg,
            o15_year: o15_year, o15_tmax: o15_tmax, o15_tmin: o15_tmin, o15_tavg: o15_tavg,
            o16_year: o16_year, o16_tmax: o16_tmax, o16_tmin: o16_tmin, o16_tavg: o16_tavg,
            o17_year: o17_year, o17_tmax: o17_tmax, o17_tmin: o17_tmin, o17_tavg: o17_tavg
          })

        }
      } else {
        alert("Sorry, no data was found for this date and location, please try again")
      }



    })
  }

  render() {

    // const { o07_tmax, o07_tmin, o07_tavg,    o08_tmax, o08_tmin, o08_tavg,
    //         o09_tmax, o09_tmin, o09_tavg,    o10_tmax, o10_tmin, o10_tavg,
    //         o11_tmax, o11_tmin, o11_tavg,    o12_tmax, o12_tmin, o12_tavg,
    //         o13_tmax, o13_tmin, o13_tavg,    o14_tmax, o14_tmin, o14_tavg,
    //         o15_tmax, o15_tmin, o15_tavg,    o16_tmax, o16_tmin, o16_tavg,
    //         o17_tmax, o17_tmin, o17_tavg                                   } = this.state


    let date = this.props.date
    let month_day_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}`

    return (
      <div>
        <br />
        <br />
        <h1><strong> { month_day_1 } </strong></h1>

        <Graph data={this.state} />

      </div>
    )
  }
}


// <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">
//
//   <Grid.Row>
//     <Inclement code_sum={code_sum} />
//     <Grid.Column>
//       <h1><strong> { month_day_1 } </strong></h1>
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
