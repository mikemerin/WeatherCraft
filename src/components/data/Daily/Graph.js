import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

export default class Graph extends Component {

  render() {

    let labels = [null, null, null, null, null, null, null]

    if (this.props.data.avg_speed !== "") {
    const pre3 = `${parseInt(this.props.data.pre3_year_month_day.slice(4,6), 10)}/${parseInt(this.props.data.pre3_year_month_day.slice(6,8))}`
    const pre2 = `${parseInt(this.props.data.pre2_year_month_day.slice(4,6), 10)}/${parseInt(this.props.data.pre2_year_month_day.slice(6,8))}`
    const pre1 = `${parseInt(this.props.data.pre1_year_month_day.slice(4,6), 10)}/${parseInt(this.props.data.pre1_year_month_day.slice(6,8))}`
    const today = `${parseInt(this.props.data.year_month_day.slice(4,6), 10)}/${parseInt(this.props.data.year_month_day.slice(6,8))}`
    const post1 = `${parseInt(this.props.data.post1_year_month_day.slice(4,6), 10)}/${parseInt(this.props.data.post1_year_month_day.slice(6,8))}`
    const post2 = `${parseInt(this.props.data.post2_year_month_day.slice(4,6), 10)}/${parseInt(this.props.data.post2_year_month_day.slice(6,8))}`
    const post3 = `${parseInt(this.props.data.post3_year_month_day.slice(4,6), 10)}/${parseInt(this.props.data.post3_year_month_day.slice(6,8))}`

    labels = [pre3, pre2, pre1, today, post1, post2, post3]
    }



    const data = {
      labels: labels,
      datasets: [
        {
          label: 'High Temps',
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
          data: [this.props.data.pre3_tmax, this.props.data.pre2_tmax, this.props.data.pre1_tmax, this.props.data.tmax, this.props.data.post1_tmax, this.props.data.post2_tmax, this.props.data.post3_tmax]
        },
        {
          label: 'Average Temps',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(192,192,0,0.4)',
          borderColor: 'rgba(192,192,0,1)',
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
          data: [this.props.data.pre3_tavg, this.props.data.pre2_tavg, this.props.data.pre1_tavg, this.props.data.tavg, this.props.data.post1_tavg, this.props.data.post2_tavg, this.props.data.post3_tavg]
        },
        {
          label: 'Low Temps',
          fill: false,
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
          data: [this.props.data.pre3_tmin, this.props.data.pre2_tmin, this.props.data.pre1_tmin, this.props.data.tmin, this.props.data.post1_tmin, this.props.data.post2_tmin, this.props.data.post3_tmin]
        }
      ]
    };
    // debugger
    return (
      <div className="centered">
        <h2>Weekly Information</h2>
        <Line data={data} height={100}/>
      </div>
    );
  }
}
