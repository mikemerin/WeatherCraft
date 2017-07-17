import React from 'react'
import { Bar } from 'react-chartjs-2'

export const Graph = (props) => {

    //note: not using precip height for now, it works but I'll save it for later

    let labels = ['', '', '', '', '', '', '', '', '', '', '']
    let temp_height = 0
    // let precip_height = 0

    let { pre5_year_month_day, pre4_year_month_day, pre3_year_month_day,
            pre2_year_month_day, pre1_year_month_day, year_month_day,
            post5_year_month_day, post4_year_month_day, post3_year_month_day,
            post2_year_month_day, post1_year_month_day, tmax, tmin, tavg,
            pre5_tmax, pre5_tmin, pre5_tavg, pre4_tmax, pre4_tmin, pre4_tavg,
            pre3_tmax, pre3_tmin, pre3_tavg, pre2_tmax, pre2_tmin, pre2_tavg,
            pre1_tmax, pre1_tmin, pre1_tavg, post5_tmax, post5_tmin, post5_tavg,
            post4_tmax, post4_tmin, post4_tavg, post3_tmax, post3_tmin, post3_tavg,
            post2_tmax, post2_tmin, post2_tavg, post1_tmax, post1_tmin, post1_tavg,
            pre5_precip_total, pre4_precip_total, pre3_precip_total,
            pre2_precip_total, pre1_precip_total, precip_total,
            post5_precip_total, post4_precip_total, post3_precip_total,
            post2_precip_total, post1_precip_total, avg_speed } = props.data

    if (avg_speed !== "") {
      const pre5 = `${parseInt(pre5_year_month_day.slice(4,6), 10)}/${parseInt(pre5_year_month_day.slice(6,8), 10)}`
      const pre4 = `${parseInt(pre4_year_month_day.slice(4,6), 10)}/${parseInt(pre4_year_month_day.slice(6,8), 10)}`
      const pre3 = `${parseInt(pre3_year_month_day.slice(4,6), 10)}/${parseInt(pre3_year_month_day.slice(6,8), 10)}`
      const pre2 = `${parseInt(pre2_year_month_day.slice(4,6), 10)}/${parseInt(pre2_year_month_day.slice(6,8), 10)}`
      const pre1 = `${parseInt(pre1_year_month_day.slice(4,6), 10)}/${parseInt(pre1_year_month_day.slice(6,8), 10)}`
      const today = `${parseInt(year_month_day.slice(4,6), 10)}/${parseInt(year_month_day.slice(6,8), 10)}`
      const post1 = `${parseInt(post1_year_month_day.slice(4,6), 10)}/${parseInt(post1_year_month_day.slice(6,8), 10)}`
      const post2 = `${parseInt(post2_year_month_day.slice(4,6), 10)}/${parseInt(post2_year_month_day.slice(6,8), 10)}`
      const post3 = `${parseInt(post3_year_month_day.slice(4,6), 10)}/${parseInt(post3_year_month_day.slice(6,8), 10)}`
      const post4 = `${parseInt(post4_year_month_day.slice(4,6), 10)}/${parseInt(post4_year_month_day.slice(6,8), 10)}`
      const post5 = `${parseInt(post5_year_month_day.slice(4,6), 10)}/${parseInt(post5_year_month_day.slice(6,8), 10)}`


      if (isNaN(pre5_tavg)) { pre5_tavg = (pre5_tmax + pre5_tmin) / 2 }
      if (isNaN(pre4_tavg)) { pre4_tavg = (pre4_tmax + pre4_tmin) / 2 }
      if (isNaN(pre3_tavg)) { pre3_tavg = (pre3_tmax + pre3_tmin) / 2 }
      if (isNaN(pre2_tavg)) { pre2_tavg = (pre2_tmax + pre2_tmin) / 2 }
      if (isNaN(pre1_tavg)) { pre1_tavg = (pre1_tmax + pre1_tmin) / 2 }
      if (tavg === "M") { tavg = (parseInt(tmax, 10) + parseInt(tmin, 10)) / 2 }
      if (isNaN(post1_tavg)) { post1_tavg = (post1_tmax + post1_tmin) / 2 }
      if (isNaN(post2_tavg)) { post2_tavg = (post2_tmax + post2_tmin) / 2 }
      if (isNaN(post3_tavg)) { post3_tavg = (post3_tmax + post3_tmin) / 2 }
      if (isNaN(post4_tavg)) { post4_tavg = (post4_tmax + post4_tmin) / 2 }
      if (isNaN(post5_tavg)) { post5_tavg = (post5_tmax + post5_tmin) / 2 }

      labels = [pre5, pre4, pre3, pre2, pre1, today, post1, post2, post3, post4, post5]

      temp_height = Math.ceil(Math.max(pre5_tmax, pre4_tmax, pre3_tmax, pre2_tmax, pre1_tmax,
        parseInt(tmax, 10), post1_tmax, post2_tmax, post3_tmax, post4_tmax, post5_tmax) / 10) * 10

      // precip_height = Math.ceil(Math.max(pre5_precip_total, pre4_precip_total, pre3_precip_total, pre2_precip_total, pre1_precip_total,
      //   parseInt(precip_total, 10), post1_precip_total, post2_precip_total, post3_precip_total, post4_precip_total, post5_precip_total) / 10) * 10

    }

    const data_temps = {
      labels: labels,
      options: {
        layout: {
          padding: {
            left: 100,
            right: 100
          }
        },
        scales: {
          xAxes: [{
            barThickness: 0.1
          }]
        }
      },
      datasets: [
        {
          label: 'Chosen Date',
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
          data: [null, null, null, null, null, temp_height, null, null, null, null, null]
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
          data: [pre5_tmax, pre4_tmax, pre3_tmax, pre2_tmax, pre1_tmax, tmax, post1_tmax, post2_tmax, post3_tmax, post4_tmax, post5_tmax]
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
          data: [pre5_tavg, pre4_tavg, pre3_tavg, pre2_tavg, pre1_tavg, tavg, post1_tavg, post2_tavg, post3_tavg, post4_tavg, post5_tavg]
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
          data: [pre5_tmin, pre4_tmin, pre3_tmin, pre2_tmin, pre1_tmin, tmin, post1_tmin, post2_tmin, post3_tmin, post4_tmin, post5_tmin]
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
    //       data: [pre5_precip_total, pre4_precip_total, pre3_precip_total, pre2_precip_total, pre1_precip_total, precip_total, post1_precip_total, post2_precip_total, post3_precip_total, post4_precip_total, post5_precip_total]
    //     }
    //   ]
    // };
    // if using precip, make height 50 for data and insert <Bar data={data_precip} height={50} />
    return (
      <div>
        <h2>Weekly Information</h2>
        <Bar data={data_temps} height={120}/>
      </div>
    );

}

export default Graph
