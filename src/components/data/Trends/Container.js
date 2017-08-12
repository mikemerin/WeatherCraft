import React, { Component } from 'react'

import { MonthliesAdapter } from '../../../adapters'

// helpers
import { DateParser } from '../../helpers/DateParser'

import Graph from './Graph'
import Temperatures from './Temperatures'

export default class Trends extends Component {

  constructor() {
    super()
    this.state = {
      o07_year: '', o07_avg_max_temp: '', o07_avg_min_temp: '', o07_avg_temp: '',
      o08_year: '', o08_avg_max_temp: '', o08_avg_min_temp: '', o08_avg_temp: '',
      o09_year: '', o09_avg_max_temp: '', o09_avg_min_temp: '', o09_avg_temp: '',
      o10_year: '', o10_avg_max_temp: '', o10_avg_min_temp: '', o10_avg_temp: '',
      o11_year: '', o11_avg_max_temp: '', o11_avg_min_temp: '', o11_avg_temp: '',
      o12_year: '', o12_avg_max_temp: '', o12_avg_min_temp: '', o12_avg_temp: '',
      o13_year: '', o13_avg_max_temp: '', o13_avg_min_temp: '', o13_avg_temp: '',
      o14_year: '', o14_avg_max_temp: '', o14_avg_min_temp: '', o14_avg_temp: '',
      o15_year: '', o15_avg_max_temp: '', o15_avg_min_temp: '', o15_avg_temp: '',
      o16_year: '', o16_avg_max_temp: '', o16_avg_min_temp: '', o16_avg_temp: '',
      o17_year: '', o17_avg_max_temp: '', o17_avg_min_temp: '', o17_avg_temp: ''
    }

  }

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    // debugger
    MonthliesAdapter.entry_historical(nextProps.station.wban, nextProps.date)
    .then(data => {
      console.log("trends cwrp", this.state, this.props)
      // debugger

      if (data[0] !== null && data[0] !== undefined) {

        let o07_year = "", o07_avg_max_temp = "", o07_avg_min_temp = "", o07_avg_temp = "", o17_year = "", o17_avg_max_temp = "", o17_avg_min_temp = "", o17_avg_temp = ""

        let x = ( data[0].year_month[3] === "7" ? 1 : 0 )

        let o08_year = data[0+x].year_month.slice(0,4), o08_avg_max_temp = parseFloat(data[0+x].avg_max_temp, 10)
          let o08_avg_min_temp = parseFloat(data[0+x].avg_min_temp, 10), o08_avg_temp = parseFloat(data[0+x].avg_temp, 10)
        let o09_year = data[1+x].year_month.slice(0,4), o09_avg_max_temp = parseFloat(data[1+x].avg_max_temp, 10)
          let o09_avg_min_temp = parseFloat(data[1+x].avg_min_temp, 10), o09_avg_temp = parseFloat(data[1+x].avg_temp, 10)
        let o10_year = data[2+x].year_month.slice(0,4), o10_avg_max_temp = parseFloat(data[2+x].avg_max_temp, 10)
          let o10_avg_min_temp = parseFloat(data[2+x].avg_min_temp, 10), o10_avg_temp = parseFloat(data[2+x].avg_temp, 10)
        let o11_year = data[3+x].year_month.slice(0,4), o11_avg_max_temp = parseFloat(data[3+x].avg_max_temp, 10)
          let o11_avg_min_temp = parseFloat(data[3+x].avg_min_temp, 10), o11_avg_temp = parseFloat(data[3+x].avg_temp, 10)
        let o12_year = data[4+x].year_month.slice(0,4), o12_avg_max_temp = parseFloat(data[4+x].avg_max_temp, 10)
          let o12_avg_min_temp = parseFloat(data[4+x].avg_min_temp, 10), o12_avg_temp = parseFloat(data[4+x].avg_temp, 10)
        let o13_year = data[5+x].year_month.slice(0,4), o13_avg_max_temp = parseFloat(data[5+x].avg_max_temp, 10)
          let o13_avg_min_temp = parseFloat(data[5+x].avg_min_temp, 10), o13_avg_temp = parseFloat(data[5+x].avg_temp, 10)
        let o14_year = data[6+x].year_month.slice(0,4), o14_avg_max_temp = parseFloat(data[6+x].avg_max_temp, 10)
          let o14_avg_min_temp = parseFloat(data[6+x].avg_min_temp, 10), o14_avg_temp = parseFloat(data[6+x].avg_temp, 10)
        let o15_year = data[7+x].year_month.slice(0,4), o15_avg_max_temp = parseFloat(data[7+x].avg_max_temp, 10)
          let o15_avg_min_temp = parseFloat(data[7+x].avg_min_temp, 10), o15_avg_temp = parseFloat(data[7+x].avg_temp, 10)
        let o16_year = data[8+x].year_month.slice(0,4), o16_avg_max_temp = parseFloat(data[8+x].avg_max_temp, 10)
          let o16_avg_min_temp = parseFloat(data[8+x].avg_min_temp, 10), o16_avg_temp = parseFloat(data[8+x].avg_temp, 10)

        if (x === 1) {
          o07_year = data[0].year_month.slice(0,4)
          o07_avg_max_temp = parseInt(data[0].avg_max_temp, 10)
          o07_avg_min_temp = parseInt(data[0].avg_min_temp, 10)
          o07_avg_temp = parseInt(data[0].avg_temp, 10)

          if (data.length === 11) {
            o17_year = data[10].year_month.slice(0,4)
            o17_avg_max_temp = parseInt(data[10].avg_max_temp, 10)
            o17_avg_min_temp = parseInt(data[10].avg_min_temp, 10)
            o17_avg_temp = parseInt(data[10].avg_temp, 10)
          }

        } else {
          o17_year = data[9].year_month.slice(0,4)
          o17_avg_max_temp = parseInt(data[9].avg_max_temp, 10)
          o17_avg_min_temp = parseInt(data[9].avg_min_temp, 10)
          o17_avg_temp = parseInt(data[9].avg_temp, 10)
        }

        this.setState({
          o07_year: o07_year, o07_avg_max_temp: o07_avg_max_temp, o07_avg_min_temp: o07_avg_min_temp, o07_avg_temp: o07_avg_temp,
          o08_year: o08_year, o08_avg_max_temp: o08_avg_max_temp, o08_avg_min_temp: o08_avg_min_temp, o08_avg_temp: o08_avg_temp,
          o09_year: o09_year, o09_avg_max_temp: o09_avg_max_temp, o09_avg_min_temp: o09_avg_min_temp, o09_avg_temp: o09_avg_temp,
          o10_year: o10_year, o10_avg_max_temp: o10_avg_max_temp, o10_avg_min_temp: o10_avg_min_temp, o10_avg_temp: o10_avg_temp,
          o11_year: o11_year, o11_avg_max_temp: o11_avg_max_temp, o11_avg_min_temp: o11_avg_min_temp, o11_avg_temp: o11_avg_temp,
          o12_year: o12_year, o12_avg_max_temp: o12_avg_max_temp, o12_avg_min_temp: o12_avg_min_temp, o12_avg_temp: o12_avg_temp,
          o13_year: o13_year, o13_avg_max_temp: o13_avg_max_temp, o13_avg_min_temp: o13_avg_min_temp, o13_avg_temp: o13_avg_temp,
          o14_year: o14_year, o14_avg_max_temp: o14_avg_max_temp, o14_avg_min_temp: o14_avg_min_temp, o14_avg_temp: o14_avg_temp,
          o15_year: o15_year, o15_avg_max_temp: o15_avg_max_temp, o15_avg_min_temp: o15_avg_min_temp, o15_avg_temp: o15_avg_temp,
          o16_year: o16_year, o16_avg_max_temp: o16_avg_max_temp, o16_avg_min_temp: o16_avg_min_temp, o16_avg_temp: o16_avg_temp,
          o17_year: o17_year, o17_avg_max_temp: o17_avg_max_temp, o17_avg_min_temp: o17_avg_min_temp, o17_avg_temp: o17_avg_temp
        })

      }
    else
      { alert("Sorry, no data was found for this date and location, please try again") }
    })
  }

  render() {

    let date = this.props.date
    let month_1 = `${DateParser[parseInt(date.slice(4,6), 10)]}`

    return (
      <div>
        <Temperatures data={this.state} month_1={ month_1 } />
        <Graph data={this.state} year={date.slice(0,4)}/>
      </div>
    )
  }
}
