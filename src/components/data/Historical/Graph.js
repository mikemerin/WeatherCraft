import React from 'react'
import { Bar } from 'react-chartjs-2'

export const Graph = (props) => {

    //note: not using precip height for now, it works but I'll save it for later
    // debugger
    let labels = ['', '', '', '', '', '', '', '', '', '']
    let data_temps = {}
    // let temp_height = 0
    // let precip_height = 0


    let { length,
      o07_year, o07_tmax, o07_tmin, o07_tavg,
      o08_year, o08_tmax, o08_tmin, o08_tavg,
      o09_year, o09_tmax, o09_tmin, o09_tavg,
      o10_year, o10_tmax, o10_tmin, o10_tavg,
      o11_year, o11_tmax, o11_tmin, o11_tavg,
      o12_year, o12_tmax, o12_tmin, o12_tavg,
      o13_year, o13_tmax, o13_tmin, o13_tavg,
      o14_year, o14_tmax, o14_tmin, o14_tavg,
      o15_year, o15_tmax, o15_tmin, o15_tavg,
      o16_year, o16_tmax, o16_tmin, o16_tavg,
      o17_year, o17_tmax, o17_tmin, o17_tavg } = props.data

    if (isNaN(o07_tavg)) { o07_tavg = (o07_tmax + o07_tmin) / 2 }
    if (isNaN(o08_tavg)) { o08_tavg = (o08_tmax + o08_tmin) / 2 }
    if (isNaN(o09_tavg)) { o09_tavg = (o09_tmax + o09_tmin) / 2 }
    if (isNaN(o10_tavg)) { o10_tavg = (o10_tmax + o10_tmin) / 2 }
    if (isNaN(o11_tavg)) { o11_tavg = (o11_tmax + o11_tmin) / 2 }
    if (isNaN(o12_tavg)) { o12_tavg = (o12_tmax + o12_tmin) / 2 }
    if (isNaN(o13_tavg)) { o13_tavg = (o13_tmax + o13_tmin) / 2 }
    if (isNaN(o14_tavg)) { o14_tavg = (o14_tmax + o14_tmin) / 2 }
    if (isNaN(o15_tavg)) { o15_tavg = (o15_tmax + o15_tmin) / 2 }
    if (isNaN(o16_tavg)) { o16_tavg = (o16_tmax + o16_tmin) / 2 }
    if (isNaN(o17_tavg)) { o17_tavg = (o17_tmax + o17_tmin) / 2 }


    if (props.data.length !== 0 && props.data.o07 === '') {
      labels = [o08_year, o09_year, o10_year, o11_year, o12_year, o13_year, o14_year, o15_year, o16_year, o17_year]
    }

    if (props.data.length !== 0 && props.data.o17 === '') {
      labels = [o07_year, o08_year, o09_year, o10_year, o11_year, o12_year, o13_year, o14_year, o15_year, o16_year]
    }

    if (props.data.length !== 0 && props.data.o07 !== '' && props.data.o17 !== '') {
      labels = [o07_year, o08_year, o09_year, o10_year, o11_year, o12_year, o13_year, o14_year, o15_year, o16_year, o17_year]
    }

    data_temps = {
      labels: labels,
      options: {
        layout: {
          padding: {
            left: 100,
            right: 100
          }
        }
      },
      datasets: [
        {
          label: 'High Temps',
          type: 'line',
          fill: "+1",
          lineTension: 0.1,
          backgroundColor: 'rgba(255,0,77,0.4)',
          borderColor: 'rgba(255,0,77,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,0,77,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,0,77,1)',
          pointHoverBorderColor: 'rgba(255,0,77,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [o08_tmax, o09_tmax, o10_tmax, o11_tmax, o12_tmax, o13_tmax, o14_tmax, o15_tmax, o16_tmax, o17_tmax]
        },
        {
          label: 'Average Temps',
          type: 'line',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255, 116, 0,0.4)',
          borderColor: 'rgba(255, 116, 0,0.4)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255, 116, 0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 116, 0,1)',
          pointHoverBorderColor: 'rgba(255, 116, 0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [o08_tavg, o09_tavg, o10_tavg, o11_tavg, o12_tavg, o13_tavg, o14_tavg, o15_tavg, o16_tavg, o17_tavg]
        },
        {
          label: 'Low Temps',
          type: 'line',
          fill: '-1',
          lineTension: 0.1,
          backgroundColor: 'rgba(169, 13, 255,0.4)',
          borderColor: 'rgba(169, 13, 255,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(169, 13, 255,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(169, 13, 255,1)',
          pointHoverBorderColor: 'rgba(169, 13, 255,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [o08_tmin, o09_tmin, o10_tmin, o11_tmin, o12_tmin, o13_tmin, o14_tmin, o15_tmin, o16_tmin, o17_tmin]
        }
      ]
    }

    return (
      <div>
        <h2>Year after Year</h2>
        <Bar data={data_temps} height={140}/>
      </div>
    );

}

export default Graph
