import React from 'react'
import { Bar } from 'react-chartjs-2'

export const Graph = (props) => {

    //note: not using precip height for now, it works but I'll save it for later
    // debugger
    const labels = ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    let data_temps = {}
    let temp_height = 0
    // let precip_height = 0

    let { o07_tmax, o07_tmin, o07_tavg,
          o08_tmax, o08_tmin, o08_tavg,
          o09_tmax, o09_tmin, o09_tavg,
          o10_tmax, o10_tmin, o10_tavg,
          o11_tmax, o11_tmin, o11_tavg,
          o12_tmax, o12_tmin, o12_tavg,
          o13_tmax, o13_tmin, o13_tavg,
          o14_tmax, o14_tmin, o14_tavg,
          o15_tmax, o15_tmin, o15_tavg,
          o16_tmax, o16_tmin, o16_tavg,
          o17_tmax, o17_tmin, o17_tavg,
          o07_year, o17_year} = props.data

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

    if (o07_year === "" ) { o07_tmax = o07_tavg = o07_tmin = null }
    if (o17_year === "" ) { o17_tmax = o17_tavg = o17_tmin = null }

    temp_height = Math.ceil(Math.max(o07_tmax, o08_tmax, o09_tmax, o10_tmax, o11_tmax,
      o12_tmax, o13_tmax, o14_tmax, o15_tmax, o16_tmax, o17_tmax) / 10) * 10

    // prep for tend lines
    const trends = [o07_tavg, o08_tavg, o09_tavg, o10_tavg, o11_tavg, o12_tavg, o13_tavg, o14_tavg, o15_tavg, o15_tavg, o16_tavg, o17_tavg].filter(x => x)
    console.log(trends)

    const year_bar = labels.map(x => x === props.year ? temp_height : null )

    data_temps = {
      labels: labels,
      scales: {
       xAxes: [{
          stacked: true,
           }],
       yAxes: [{
            stacked: true
           }]
      },
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
          label: 'Chosen Year',
          type: 'bar',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderColor: 'rgba(0,0,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,0,0,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: year_bar
        },
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
          data: [o07_tmax, o08_tmax, o09_tmax, o10_tmax, o11_tmax, o12_tmax, o13_tmax, o14_tmax, o15_tmax, o16_tmax, o17_tmax]
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
          data: [o07_tavg, o08_tavg, o09_tavg, o10_tavg, o11_tavg, o12_tavg, o13_tavg, o14_tavg, o15_tavg, o16_tavg, o17_tavg]
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
          data: [o07_tmin, o08_tmin, o09_tmin, o10_tmin, o11_tmin, o12_tmin, o13_tmin, o14_tmin, o15_tmin, o16_tmin, o17_tmin]
        }
      ]
    }

    return (
      <div>
        <Bar data={data_temps} height={140}/>
      </div>
    );

}

export default Graph
