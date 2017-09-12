import React from 'react'
import { Bar } from 'react-chartjs-2'

export const Graph = (props) => {

    //note: not using precip height for now, it works but I'll save it for later
    // debugger
    const labels = ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    let data_temps = {}
    let temp_height = 0
    // let precip_height = 0

    let { o07_avg_max_temp, o07_avg_min_temp, o07_avg_temp,
          o08_avg_max_temp, o08_avg_min_temp, o08_avg_temp,
          o09_avg_max_temp, o09_avg_min_temp, o09_avg_temp,
          o10_avg_max_temp, o10_avg_min_temp, o10_avg_temp,
          o11_avg_max_temp, o11_avg_min_temp, o11_avg_temp,
          o12_avg_max_temp, o12_avg_min_temp, o12_avg_temp,
          o13_avg_max_temp, o13_avg_min_temp, o13_avg_temp,
          o14_avg_max_temp, o14_avg_min_temp, o14_avg_temp,
          o15_avg_max_temp, o15_avg_min_temp, o15_avg_temp,
          o16_avg_max_temp, o16_avg_min_temp, o16_avg_temp,
          o17_avg_max_temp, o17_avg_min_temp, o17_avg_temp,
          o07_year, o17_year} = props.data

    if (isNaN(o07_avg_temp)) { o07_avg_temp = (o07_avg_max_temp + o07_avg_min_temp) / 2 }
    if (isNaN(o08_avg_temp)) { o08_avg_temp = (o08_avg_max_temp + o08_avg_min_temp) / 2 }
    if (isNaN(o09_avg_temp)) { o09_avg_temp = (o09_avg_max_temp + o09_avg_min_temp) / 2 }
    if (isNaN(o10_avg_temp)) { o10_avg_temp = (o10_avg_max_temp + o10_avg_min_temp) / 2 }
    if (isNaN(o11_avg_temp)) { o11_avg_temp = (o11_avg_max_temp + o11_avg_min_temp) / 2 }
    if (isNaN(o12_avg_temp)) { o12_avg_temp = (o12_avg_max_temp + o12_avg_min_temp) / 2 }
    if (isNaN(o13_avg_temp)) { o13_avg_temp = (o13_avg_max_temp + o13_avg_min_temp) / 2 }
    if (isNaN(o14_avg_temp)) { o14_avg_temp = (o14_avg_max_temp + o14_avg_min_temp) / 2 }
    if (isNaN(o15_avg_temp)) { o15_avg_temp = (o15_avg_max_temp + o15_avg_min_temp) / 2 }
    if (isNaN(o16_avg_temp)) { o16_avg_temp = (o16_avg_max_temp + o16_avg_min_temp) / 2 }
    if (isNaN(o17_avg_temp)) { o17_avg_temp = (o17_avg_max_temp + o17_avg_min_temp) / 2 }

    if (o07_year === "" ) { o07_avg_max_temp = o07_avg_temp = o07_avg_min_temp = null }
    if (o17_year === "" ) { o17_avg_max_temp = o17_avg_temp = o17_avg_min_temp = null }

    temp_height = Math.ceil(Math.max(o07_avg_max_temp, o08_avg_max_temp, o09_avg_max_temp, o10_avg_max_temp, o11_avg_max_temp,
      o12_avg_max_temp, o13_avg_max_temp, o14_avg_max_temp, o15_avg_max_temp, o16_avg_max_temp, o17_avg_max_temp) / 10) * 10

    let avg_max_temps = [o07_avg_max_temp, o08_avg_max_temp, o09_avg_max_temp, o10_avg_max_temp, o11_avg_max_temp, o12_avg_max_temp, o13_avg_max_temp, o14_avg_max_temp, o15_avg_max_temp, o16_avg_max_temp, o17_avg_max_temp]
    let avg_temps = [o07_avg_temp, o08_avg_temp, o09_avg_temp, o10_avg_temp, o11_avg_temp, o12_avg_temp, o13_avg_temp, o14_avg_temp, o15_avg_temp, o16_avg_temp, o17_avg_temp]
    let avg_min_temps = [o07_avg_min_temp, o08_avg_min_temp, o09_avg_min_temp, o10_avg_min_temp, o11_avg_min_temp, o12_avg_min_temp, o13_avg_min_temp, o14_avg_min_temp, o15_avg_min_temp, o16_avg_min_temp, o17_avg_min_temp]

    // trend line
    let trend = []
    // let missing = 0

    if (avg_temps.filter(x=>x).length !== 0) {

      // cut off beginning or end if data isn't included in timeframe

      // if (avg_temps[avg_temps.length-1] === null) {
      //   avg_temps.pop()
      //   missing = 1
      // }

      // numbers to work off of
      let sum_temps = 0
      let sum_x_axis = 0
      let linear = 0
      let x_squared = 0

      let avg = avg_temps.filter(x => x)
      let length = avg_temps.length
      let x_axis = avg_temps.map((x,i) => {
          sum_temps = Math.round(avg.reduce((sum, x) => sum + x) * 10) / 10
          return i+1
      })

      sum_x_axis = x_axis.reduce((sum, x) => sum + x)

      // work off those prior numbers to set up the trend equation
      avg_temps.forEach((t, i) => {
          x_squared += (i+1)**2
          if (!isNaN(t) || t !== null) {
            linear += t * i
          }
      })

      // round linear
      linear = Math.round(linear * 10) / 10

      // for when trend line is added
      // if (missing === 1) {
      //   avg_temps.push(null)
      // }


      // get slope and intercept for line start point and angle, then create the trend line
      let slope = 1.0 * ((length * linear) - (sum_x_axis * sum_temps)) / ((length * x_squared) - (sum_x_axis ** 2))
      let intercept = 1.0 * (sum_temps - (slope * sum_x_axis)) / length
      trend = x_axis.map(x => (slope * x) + intercept )
    }

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
      showTooltips: true,
      options: {
        spanGaps: true,
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
        // to be fixed, right now the slope isn't accurate with null values
        // {
        //   label: 'Avg Temps Trend',
        //   fill: false,
        //   type: 'line',
        //   backgroundColor: 'rgba(0,0,0,0.2)',
        //   borderColor: 'rgba(0,0,0,1)',
        //   borderCapStyle: 'butt',
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: 'miter',
        //   pointBorderColor: 'rgba(0,0,0,1)',
        //   pointBackgroundColor: '#fff',
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: 'rgba(0,0,0,1)',
        //   pointHoverBorderColor: 'rgba(0,0,0,1)',
        //   pointHoverBorderWidth: 2,
        //   pointRadius: 1,
        //   pointHitRadius: 10,
        //   data: trend
        // },
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
          data: avg_max_temps
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
          data: avg_temps
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
          data: avg_min_temps
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
