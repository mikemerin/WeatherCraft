import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

export default class Graph extends Component {

  render() {
    const data = {
      // labels: ['1/20 High', '1/20 Low', '1/21 High', '1/21 Low', '1/22 High', '1/22 Low', '1/23 High', 'April', 'May', 'June', 'July'],
      labels: ['1/20', '1/21', '1/22', '1/23', '1/24', '1/25', '1/26'],
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
