import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

export const Graph = (props) => {

    //note: not using precip height for now, it works but I'll save it for later

    let labels = ['', '', '', '', '', '', '', '', '', '', '']
    let temp_height = 0
    // let precip_height = 0

    if (props.data.avg_speed !== "") {
      const pre5 = `${parseInt(props.data.pre5_year_month_day.slice(4,6), 10)}/${parseInt(props.data.pre5_year_month_day.slice(6,8))}`
      const pre4 = `${parseInt(props.data.pre4_year_month_day.slice(4,6), 10)}/${parseInt(props.data.pre4_year_month_day.slice(6,8))}`
      const pre3 = `${parseInt(props.data.pre3_year_month_day.slice(4,6), 10)}/${parseInt(props.data.pre3_year_month_day.slice(6,8))}`
      const pre2 = `${parseInt(props.data.pre2_year_month_day.slice(4,6), 10)}/${parseInt(props.data.pre2_year_month_day.slice(6,8))}`
      const pre1 = `${parseInt(props.data.pre1_year_month_day.slice(4,6), 10)}/${parseInt(props.data.pre1_year_month_day.slice(6,8))}`
      const today = `${parseInt(props.data.year_month_day.slice(4,6), 10)}/${parseInt(props.data.year_month_day.slice(6,8))}`
      const post1 = `${parseInt(props.data.post1_year_month_day.slice(4,6), 10)}/${parseInt(props.data.post1_year_month_day.slice(6,8))}`
      const post2 = `${parseInt(props.data.post2_year_month_day.slice(4,6), 10)}/${parseInt(props.data.post2_year_month_day.slice(6,8))}`
      const post3 = `${parseInt(props.data.post3_year_month_day.slice(4,6), 10)}/${parseInt(props.data.post3_year_month_day.slice(6,8))}`
      const post4 = `${parseInt(props.data.post4_year_month_day.slice(4,6), 10)}/${parseInt(props.data.post4_year_month_day.slice(6,8))}`
      const post5 = `${parseInt(props.data.post5_year_month_day.slice(4,6), 10)}/${parseInt(props.data.post5_year_month_day.slice(6,8))}`

      labels = [pre5, pre4, pre3, pre2, pre1, today, post1, post2, post3, post4, post5]

      temp_height = Math.ceil(Math.max(props.data.pre5_tmax, props.data.pre4_tmax, props.data.pre3_tmax, props.data.pre2_tmax, props.data.pre1_tmax,
        parseInt(props.data.tmax, 10), props.data.post1_tmax, props.data.post2_tmax, props.data.post3_tmax, props.data.post4_tmax, props.data.post5_tmax) / 10) * 10

      // precip_height = Math.ceil(Math.max(props.data.pre5_precip_total, props.data.pre4_precip_total, props.data.pre3_precip_total, props.data.pre2_precip_total, props.data.pre1_precip_total,
      //   parseInt(props.data.precip_total, 10), props.data.post1_precip_total, props.data.post2_precip_total, props.data.post3_precip_total, props.data.post4_precip_total, props.data.post5_precip_total) / 10) * 10

    }

    const data_temps = {
      labels: labels,
      datasets: [
        {
          label: 'Chosen Date',
          type: 'bar',
          backgroundColor: 'rgba(0,0,0,0.05)',
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
          options: {
            scales: {
              xAxes: [{
                barThickness: 0.1
              }]
            }
          },
          data: [null, null, null, null, null, temp_height, null, null, null, null, null]
        },
        {
          label: 'High Temps',
          type: 'line',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(192,0,0,0.4)',
          borderColor: 'rgba(192,0,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(192,0,0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(192,0,0,1)',
          pointHoverBorderColor: 'rgba(192,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [props.data.pre5_tmax, props.data.pre4_tmax, props.data.pre3_tmax, props.data.pre2_tmax, props.data.pre1_tmax, props.data.tmax, props.data.post1_tmax, props.data.post2_tmax, props.data.post3_tmax, props.data.post4_tmax, props.data.post5_tmax]
        },
        {
          label: 'Average Temps',
          fill: false,
          type: 'line',
          lineTension: 0.1,
          backgroundColor: 'rgba(192,192,0,0.4)',
          borderColor: 'rgba(192,192,0,0.4)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(192,192,0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(192,192,0,1)',
          pointHoverBorderColor: 'rgba(192,192,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [props.data.pre5_tavg, props.data.pre4_tavg, props.data.pre3_tavg, props.data.pre2_tavg, props.data.pre1_tavg, props.data.tavg, props.data.post1_tavg, props.data.post2_tavg, props.data.post3_tavg, props.data.post4_tavg, props.data.post5_tavg]
        },
        {
          label: 'Low Temps',
          fill: false,
          type: 'line',
          lineTension: 0.1,
          backgroundColor: 'rgba(0,0,192,0.4)',
          borderColor: 'rgba(0,0,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,0,192,1)',
          pointHoverBorderColor: 'rgba(0,0,192,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [props.data.pre5_tmin, props.data.pre4_tmin, props.data.pre3_tmin, props.data.pre2_tmin, props.data.pre1_tmin, props.data.tmin, props.data.post1_tmin, props.data.post2_tmin, props.data.post3_tmin, props.data.post4_tmin, props.data.post5_tmin]
        }
      ]
    };

    // const data_precip = {
    //   labels: labels,
    //   datasets: [
        // {
        //   label: 'Chosen Date',
        //   type: 'bar',
        //   backgroundColor: 'rgba(0,0,0,0.05)',
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
        //   data: [null, null, null, null, null, precip_height, null, null, null, null, null]
        // },
    //     {
    //       label: 'Inches of Precip',
    //       fill: true,
    //       type: 'bar',
    //       lineTension: 0.1,
    //       backgroundColor: 'rgba(80,80,192,0.4)',
    //       borderColor: 'rgba(80,80,192,1)',
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgba(80,80,192,1)',
    //       pointBackgroundColor: '#fff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgba(80,80,192,1)',
    //       pointHoverBorderColor: 'rgba(80,80,192,1)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       scales: {
    //         yAxes: [ {
    //           ticks: {
    //             maxTicksLimit: 10,
    //             stepSize: 2
    //           }
    //         } ]
    //       },
    //       data: [props.data.pre5_precip_total, props.data.pre4_precip_total, props.data.pre3_precip_total, props.data.pre2_precip_total, props.data.pre1_precip_total, props.data.precip_total, props.data.post1_precip_total, props.data.post2_precip_total, props.data.post3_precip_total, props.data.post4_precip_total, props.data.post5_precip_total]
    //     }
    //   ]
    // };
    // if using precip, make height 50 for data and insert <Bar data={precip_temps} height={50} />
    return (
      <div>
        <h2>Weekly Information</h2>
        <Bar data={data_temps} height={100}/>
      </div>
    );

}

export default Graph
