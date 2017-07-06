import React from 'react'

export default function StationInfo({station}) {

    const { name, callsign, location, state, latitude, longitude, ground_height } = station

    // station_height can also be called if needed

    let latitude_1 = (latitude > 0 ? `${latitude}ºN` : `${latitude.slice(1)}ºS`)
    let longitude_1 = (longitude > 0 ? `${longitude}ºE` : `${longitude.slice(1)}ºW`)

    return (
      <div>
        <div className="row">{ `${name} (K${callsign})` }</div>
        <div className="row">{ `${location}, ${state}` }</div>
        <br></br>
        <div className="row">{ `Lat/Lon: ${latitude_1} / ${longitude_1}` }</div>
        <div className="row">{ `Station Height: ${ground_height}'` }</div>
      </div>
    )

}
