import React from 'react'
import { Bar } from 'react-chartjs-2'

import { DateParser } from '../../helpers/DateParser'

export const Graph = (props) => {

    //note: not using precip height for now, it works but I'll save it for later

    let labels = ['', '', '', '', '', '', '', '', '', '', '', '', '']
    let temp_height = 0
    // let precip_height = 0

    let { pre6_year_month, pre5_year_month, pre4_year_month,
            pre3_year_month, pre2_year_month, pre1_year_month, year_month,
            post6_year_month, post5_year_month, post4_year_month, post3_year_month,
            post2_year_month, post1_year_month, avg_max_temp, avg_min_temp, avg_temp,
            pre6_avg_max_temp, pre6_avg_min_temp, pre6_avg_temp, pre5_avg_max_temp, pre5_avg_min_temp, pre5_avg_temp,
            pre4_avg_max_temp, pre4_avg_min_temp, pre4_avg_temp, pre3_avg_max_temp, pre3_avg_min_temp, pre3_avg_temp,
            pre2_avg_max_temp, pre2_avg_min_temp, pre2_avg_temp, pre1_avg_max_temp, pre1_avg_min_temp, pre1_avg_temp,
            post6_avg_max_temp, post6_avg_min_temp, post6_avg_temp, post5_avg_max_temp, post5_avg_min_temp, post5_avg_temp,
            post4_avg_max_temp, post4_avg_min_temp, post4_avg_temp, post3_avg_max_temp, post3_avg_min_temp, post3_avg_temp,
            post2_avg_max_temp, post2_avg_min_temp, post2_avg_temp, post1_avg_max_temp, post1_avg_min_temp, post1_avg_temp,
            // pre5_total_monthly_precip, pre4_total_monthly_precip, pre3_total_monthly_precip,
            // pre2_total_monthly_precip, pre1_total_monthly_precip, total_monthly_precip,
            // post5_total_monthly_precip, post4_total_monthly_precip, post3_total_monthly_precip,
            // post2_total_monthly_precip, post1_total_monthly_precip,
            // pre5_total_total_snowfall, pre4_total_total_snowfall, pre3_total_total_snowfall,
            // pre2_total_total_snowfall, pre1_total_total_snowfall, total_total_snowfall,
            // post5_total_total_snowfall, post4_total_total_snowfall, post3_total_total_snowfall,
            // post2_total_total_snowfall, post1_total_total_snowfall,
             } = props.data

    if (avg_temp !== "") {
      const pre6 = pre6_year_month === "M" ? "" : `${DateParser[parseInt(pre6_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(pre6_year_month.slice(2,4), 10)}`
      const pre5 = pre5_year_month === "M" ? "" : `${DateParser[parseInt(pre5_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(pre5_year_month.slice(2,4), 10)}`
      const pre4 = pre4_year_month === "M" ? "" : `${DateParser[parseInt(pre4_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(pre4_year_month.slice(2,4), 10)}`
      const pre3 = pre3_year_month === "M" ? "" : `${DateParser[parseInt(pre3_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(pre3_year_month.slice(2,4), 10)}`
      const pre2 = pre2_year_month === "M" ? "" : `${DateParser[parseInt(pre2_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(pre2_year_month.slice(2,4), 10)}`
      const pre1 = pre1_year_month === "M" ? "" : `${DateParser[parseInt(pre1_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(pre1_year_month.slice(2,4), 10)}`
      const today = `${DateParser[parseInt(year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(year_month.slice(2,4), 10)}`
      const post1 = post1_year_month === "M" ? "" : `${DateParser[parseInt(post1_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(post1_year_month.slice(2,4), 10)}`
      const post2 = post2_year_month === "M" ? "" : `${DateParser[parseInt(post2_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(post2_year_month.slice(2,4), 10)}`
      const post3 = post3_year_month === "M" ? "" : `${DateParser[parseInt(post3_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(post3_year_month.slice(2,4), 10)}`
      const post4 = post4_year_month === "M" ? "" : `${DateParser[parseInt(post4_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(post4_year_month.slice(2,4), 10)}`
      const post5 = post5_year_month === "M" ? "" : `${DateParser[parseInt(post5_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(post5_year_month.slice(2,4), 10)}`
      const post6 = post6_year_month === "M" ? "" : `${DateParser[parseInt(post6_year_month.slice(4,6), 10)].slice(0,3)} '${parseInt(post6_year_month.slice(2,4), 10)}`

      if (isNaN(pre6_avg_temp)) { pre6_avg_temp = (pre6_avg_max_temp + pre6_avg_min_temp) / 2 }
      if (isNaN(pre5_avg_temp)) { pre5_avg_temp = (pre5_avg_max_temp + pre5_avg_min_temp) / 2 }
      if (isNaN(pre4_avg_temp)) { pre4_avg_temp = (pre4_avg_max_temp + pre4_avg_min_temp) / 2 }
      if (isNaN(pre3_avg_temp)) { pre3_avg_temp = (pre3_avg_max_temp + pre3_avg_min_temp) / 2 }
      if (isNaN(pre2_avg_temp)) { pre2_avg_temp = (pre2_avg_max_temp + pre2_avg_min_temp) / 2 }
      if (isNaN(pre1_avg_temp)) { pre1_avg_temp = (pre1_avg_max_temp + pre1_avg_min_temp) / 2 }
      if (avg_temp === "M") { avg_temp = (parseInt(avg_max_temp, 10) + parseInt(avg_min_temp, 10)) / 2 }
      if (isNaN(post1_avg_temp)) { post1_avg_temp = (post1_avg_max_temp + post1_avg_min_temp) / 2 }
      if (isNaN(post2_avg_temp)) { post2_avg_temp = (post2_avg_max_temp + post2_avg_min_temp) / 2 }
      if (isNaN(post3_avg_temp)) { post3_avg_temp = (post3_avg_max_temp + post3_avg_min_temp) / 2 }
      if (isNaN(post4_avg_temp)) { post4_avg_temp = (post4_avg_max_temp + post4_avg_min_temp) / 2 }
      if (isNaN(post5_avg_temp)) { post5_avg_temp = (post5_avg_max_temp + post5_avg_min_temp) / 2 }
      if (isNaN(post6_avg_temp)) { post6_avg_temp = (post6_avg_max_temp + post6_avg_min_temp) / 2 }

      labels = [pre6, pre5, pre4, pre3, pre2, pre1, today, post1, post2, post3, post4, post5, post6]

      temp_height = Math.ceil(Math.max(pre6_avg_max_temp, pre5_avg_max_temp, pre4_avg_max_temp, pre3_avg_max_temp, pre2_avg_max_temp, pre1_avg_max_temp,
        parseInt(avg_max_temp, 10), post1_avg_max_temp, post2_avg_max_temp, post3_avg_max_temp, post4_avg_max_temp, post5_avg_max_temp, post6_avg_max_temp) / 10) * 10

      // precip_height = Math.ceil(Math.max(pre5_precip_total, pre4_precip_total, pre3_precip_total, pre2_precip_total, pre1_precip_total,
      //   parseInt(precip_total, 10), post1_precip_total, post2_precip_total, post3_precip_total, post4_precip_total, post5_precip_total) / 10) * 10

    }

    const data_temps = {
      labels: labels,
      showTooltips: true,
      options: {
        spanGaps: true,
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
          data: [null, null, null, null, null, null, temp_height, null, null, null, null, null, null]
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
          data: [pre6_avg_max_temp, pre5_avg_max_temp, pre4_avg_max_temp, pre3_avg_max_temp, pre2_avg_max_temp, pre1_avg_max_temp, avg_max_temp, post1_avg_max_temp, post2_avg_max_temp, post3_avg_max_temp, post4_avg_max_temp, post5_avg_max_temp, post6_avg_max_temp]
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
          data: [pre6_avg_temp, pre5_avg_temp, pre4_avg_temp, pre3_avg_temp, pre2_avg_temp, pre1_avg_temp, avg_temp, post1_avg_temp, post2_avg_temp, post3_avg_temp, post4_avg_temp, post5_avg_temp, post6_avg_temp]
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
          data: [pre6_avg_min_temp, pre5_avg_min_temp, pre4_avg_min_temp, pre3_avg_min_temp, pre2_avg_min_temp, pre1_avg_min_temp, avg_min_temp, post1_avg_min_temp, post2_avg_min_temp, post3_avg_min_temp, post4_avg_min_temp, post5_avg_min_temp, post6_avg_min_temp]
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
        <h2>Monthly Information</h2>
        <Bar data={data_temps} height={120}/>
      </div>
    );

}

export default Graph
