import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import { DailiesAdapter } from '../../../adapters'

// helpers
import { DateParser } from '../../helpers/DateParser'

import Graph from './Graph'
import Temperatures from './Temperatures'

export default class Historical extends Component {

  constructor() {
    super()
    this.state = {
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
    // debugger
    DailiesAdapter.station_historical(nextProps.station.wban, nextProps.date)
    .then(data => {
      console.log("historical cwrp")
      // debugger
      if (data[0] !== null && data[0] !== undefined) {

        let o07_year = "", o07_tmax = "", o07_tmin = "", o07_tavg = "", o17_year = "", o17_tmax = "", o17_tmin = "", o17_tavg = ""

        let x = ( data[0].year_month_day[3] === "7" ? 1 : 0 )

        let o08_year = data[0+x].year_month_day.slice(0,4), o08_tmax = parseInt(data[0+x].tmax, 10), o08_tmin = parseInt(data[0+x].tmin, 10), o08_tavg = parseInt(data[0+x].tavg, 10)
        let o09_year = data[1+x].year_month_day.slice(0,4), o09_tmax = parseInt(data[1+x].tmax, 10), o09_tmin = parseInt(data[1+x].tmin, 10), o09_tavg = parseInt(data[1+x].tavg, 10)
        let o10_year = data[2+x].year_month_day.slice(0,4), o10_tmax = parseInt(data[2+x].tmax, 10), o10_tmin = parseInt(data[2+x].tmin, 10), o10_tavg = parseInt(data[2+x].tavg, 10)
        let o11_year = data[3+x].year_month_day.slice(0,4), o11_tmax = parseInt(data[3+x].tmax, 10), o11_tmin = parseInt(data[3+x].tmin, 10), o11_tavg = parseInt(data[3+x].tavg, 10)
        let o12_year = data[4+x].year_month_day.slice(0,4), o12_tmax = parseInt(data[4+x].tmax, 10), o12_tmin = parseInt(data[4+x].tmin, 10), o12_tavg = parseInt(data[4+x].tavg, 10)
        let o13_year = data[5+x].year_month_day.slice(0,4), o13_tmax = parseInt(data[5+x].tmax, 10), o13_tmin = parseInt(data[5+x].tmin, 10), o13_tavg = parseInt(data[5+x].tavg, 10)
        let o14_year = data[6+x].year_month_day.slice(0,4), o14_tmax = parseInt(data[6+x].tmax, 10), o14_tmin = parseInt(data[6+x].tmin, 10), o14_tavg = parseInt(data[6+x].tavg, 10)
        let o15_year = data[7+x].year_month_day.slice(0,4), o15_tmax = parseInt(data[7+x].tmax, 10), o15_tmin = parseInt(data[7+x].tmin, 10), o15_tavg = parseInt(data[7+x].tavg, 10)
        let o16_year = data[8+x].year_month_day.slice(0,4), o16_tmax = parseInt(data[8+x].tmax, 10), o16_tmin = parseInt(data[8+x].tmin, 10), o16_tavg = parseInt(data[8+x].tavg, 10)

        if (x === 1) {
          o07_year = data[0].year_month_day.slice(0,4)
          o07_tmax = parseInt(data[0].tmax, 10)
          o07_tmin = parseInt(data[0].tmin, 10)
          o07_tavg = parseInt(data[0].tavg, 10)

          if (data.length === 11) {
            o17_year = data[10].year_month_day.slice(0,4)
            o17_tmax = parseInt(data[10].tmax, 10)
            o17_tmin = parseInt(data[10].tmin, 10)
            o17_tavg = parseInt(data[10].tavg, 10)
          }

        } else {
          o17_year = data[9].year_month_day.slice(0,4)
          o17_tmax = parseInt(data[9].tmax, 10)
          o17_tmin = parseInt(data[9].tmin, 10)
          o17_tavg = parseInt(data[9].tavg, 10)
        }

        this.setState({
          o07_year: o07_year, o07_tmax: o07_tmax, o07_tmin: o07_tmin, o07_tavg: o07_tavg,
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
    else
      { alert("Sorry, no data was found for this date and location, please try again") }
    })
  }

  render() {

    let date = this.props.date
    let month_day_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(6,8)}`

    return (
      <div>
        <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">

          <Grid.Row>
            <Grid.Column>
              <h1><strong> { month_day_1 } </strong></h1>
            </Grid.Column>
          </Grid.Row>
          <Temperatures data={this.state} />
          <Grid.Row>
            <br />
            <h2>Year after Year</h2>
          </Grid.Row>

        </Grid>

        <Graph data={this.state} year={date.slice(0,4)}/>

      </div>
    )
  }
}
