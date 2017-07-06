import React, { Component } from 'react'

import { MonthliesAdapter } from '../../adapters'
// note, need to fix this double ..

export default class Monthly extends Component {

  constructor() {
    super()
    this.state = {
      avg_max_temp: ''
    }

  }

  componentDidUpdate() {

  }

  render() {

    MonthliesAdapter.station_date(this.props.station.wban, this.props.date)
    .then(data => {
      console.log(data)
    })

    // const { name, callsign, location, state, latitude, longitude, ground_height, station_height } = this.props.station
    //
    // let latitude_1 = (latitude > 0 ? `${latitude}ºN` : `${latitude.slice(1)}ºS`)
    // let longitude_1 = (longitude > 0 ? `${longitude}ºE` : `${longitude.slice(1)}ºW`)

    // <div className="row">{ `${name} (K${callsign})` }</div>
    // <div className="row">{ `${location}, ${state}` }</div>
    // <br></br>
    // <div className="row">{ `Lat/Lon: ${latitude_1} / ${longitude_1}` }</div>
    // <div className="row">{ `Station Height: ${ground_height}'` }</div>

    return (
      <div>
        test
      </div>
    )
  }
}
