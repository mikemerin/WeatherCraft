import React, { Component } from 'react'
import { Icon, Statistic, Grid } from 'semantic-ui-react'

import { MonthliesAdapter } from '../../../adapters'

// helpers
import { DateParser } from '../../helpers/DateParser'

// outputs
import Temperatures from './Temperatures'

import Graph from './Graph'

export default class Monthly extends Component {

  constructor() {
    super()
    this.state = {
      wban: '', year_month: '',
      avg_max_temp: '', avg_min_temp: '', avg_temp: '',
      date_max24_hr_precip: '', date_max24_hr_snowfall: '',
      days_with_precip_ge_p01inch: '', days_with_precip_ge_p10inch: '',
      days_with_snowfall_ge_1p0inch: '', departure_from_normal: '',
      departure_from_normal_precip: '', departure_max_temp: '', departure_min_temp: '',
      max24_hr_precip: '', max24_hr_snowfall: '', total_monthly_precip: '', total_snowfall: '',

      pre6_year_month: '', pre6_avg_max_temp: '', pre6_avg_min_temp: '', pre6_avg_temp: '', pre6_total_monthly_precip: '', pre6_total_snowfall: '',
      pre5_year_month: '', pre5_avg_max_temp: '', pre5_avg_min_temp: '', pre5_avg_temp: '', pre5_total_monthly_precip: '', pre5_total_snowfall: '',
      pre4_year_month: '', pre4_avg_max_temp: '', pre4_avg_min_temp: '', pre4_avg_temp: '', pre4_total_monthly_precip: '', pre4_total_snowfall: '',
      pre3_year_month: '', pre3_avg_max_temp: '', pre3_avg_min_temp: '', pre3_avg_temp: '', pre3_total_monthly_precip: '', pre3_total_snowfall: '',
      pre2_year_month: '', pre2_avg_max_temp: '', pre2_avg_min_temp: '', pre2_avg_temp: '', pre2_total_monthly_precip: '', pre2_total_snowfall: '',
      pre1_year_month: '', pre1_avg_max_temp: '', pre1_avg_min_temp: '', pre1_avg_temp: '', pre1_total_monthly_precip: '', pre1_total_snowfall: '',
      post1_year_month: '', post1_avg_max_temp: '', post1_avg_min_temp: '', post1_avg_temp: '', post1_total_monthly_precip: '', post1_total_snowfall: '',
      post2_year_month: '', post2_avg_max_temp: '', post2_avg_min_temp: '', post2_avg_temp: '', post2_total_monthly_precip: '', post2_total_snowfall: '',
      post3_year_month: '', post3_avg_max_temp: '', post3_avg_min_temp: '', post3_avg_temp: '', post3_total_monthly_precip: '', post3_total_snowfall: '',
      post4_year_month: '', post4_avg_max_temp: '', post4_avg_min_temp: '', post4_avg_temp: '', post4_total_monthly_precip: '', post4_total_snowfall: '',
      post5_year_month: '', post5_avg_max_temp: '', post5_avg_min_temp: '', post5_avg_temp: '', post5_total_monthly_precip: '', post5_total_snowfall: '',
      post6_year_month: '', post6_avg_max_temp: '', post6_avg_min_temp: '', post6_avg_temp: '', post6_total_monthly_precip: '', post6_total_snowfall: ''
    }

  }

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    MonthliesAdapter.entry_date(nextProps.station.wban, nextProps.date)
    .then(data => {
      // debugger
      console.log("monthly cwrp")

      if (data[6] !== null && data[6] !== undefined) {

        const { wban, year_month,
          avg_max_temp, avg_min_temp, avg_temp,
          date_max24_hr_precip, date_max24_hr_snowfall,
          days_with_precip_ge_p01inch, days_with_precip_ge_p10inch,
          days_with_snowfall_ge_1p0inch, departure_from_normal,
          departure_from_normal_precip, departure_max_temp, departure_min_temp,
          max24_hr_precip, max24_hr_snowfall, total_monthly_precip, total_snowfall } = data[6]

        const pre6_year_month = data[0].year_month, pre6_avg_max_temp = parseFloat(data[0].avg_max_temp), pre6_avg_min_temp = parseFloat(data[0].avg_min_temp),
            pre6_avg_temp = parseFloat(data[0].avg_temp), pre6_total_monthly_precip = parseFloat(data[0].total_monthly_precip), pre6_total_snowfall = parseFloat(data[0].total_snowfall)
        const pre5_year_month = data[1].year_month, pre5_avg_max_temp = parseFloat(data[1].avg_max_temp), pre5_avg_min_temp = parseFloat(data[1].avg_min_temp),
            pre5_avg_temp = parseFloat(data[1].avg_temp), pre5_total_monthly_precip = parseFloat(data[1].total_monthly_precip), pre5_total_snowfall = parseFloat(data[1].total_snowfall)
        const pre4_year_month = data[2].year_month, pre4_avg_max_temp = parseFloat(data[2].avg_max_temp), pre4_avg_min_temp = parseFloat(data[2].avg_min_temp),
            pre4_avg_temp = parseFloat(data[2].avg_temp), pre4_total_monthly_precip = parseFloat(data[2].total_monthly_precip), pre4_total_snowfall = parseFloat(data[2].total_snowfall)
        const pre3_year_month = data[3].year_month, pre3_avg_max_temp = parseFloat(data[3].avg_max_temp), pre3_avg_min_temp = parseFloat(data[3].avg_min_temp),
            pre3_avg_temp = parseFloat(data[3].avg_temp), pre3_total_monthly_precip = parseFloat(data[3].total_monthly_precip), pre3_total_snowfall = parseFloat(data[3].total_snowfall)
        const pre2_year_month = data[4].year_month, pre2_avg_max_temp = parseFloat(data[4].avg_max_temp), pre2_avg_min_temp = parseFloat(data[4].avg_min_temp),
            pre2_avg_temp = parseFloat(data[4].avg_temp), pre2_total_monthly_precip = parseFloat(data[4].total_monthly_precip), pre2_total_snowfall = parseFloat(data[4].total_snowfall)
        const pre1_year_month = data[5].year_month, pre1_avg_max_temp = parseFloat(data[5].avg_max_temp), pre1_avg_min_temp = parseFloat(data[5].avg_min_temp),
            pre1_avg_temp = parseFloat(data[5].avg_temp), pre1_total_monthly_precip = parseFloat(data[5].total_monthly_precip), pre1_total_snowfall = parseFloat(data[5].total_snowfall)
        const post1_year_month = data[7].year_month, post1_avg_max_temp = parseFloat(data[7].avg_max_temp), post1_avg_min_temp = parseFloat(data[7].avg_min_temp),
            post1_avg_temp = parseFloat(data[7].avg_temp), post1_total_monthly_precip = parseFloat(data[7].total_monthly_precip), post1_total_snowfall = parseFloat(data[7].total_snowfall)
        const post2_year_month = data[8].year_month, post2_avg_max_temp = parseFloat(data[8].avg_max_temp), post2_avg_min_temp = parseFloat(data[8].avg_min_temp),
            post2_avg_temp = parseFloat(data[8].avg_temp), post2_total_monthly_precip = parseFloat(data[8].total_monthly_precip), post2_total_snowfall = parseFloat(data[8].total_snowfall)
        const post3_year_month = data[9].year_month, post3_avg_max_temp = parseFloat(data[9].avg_max_temp), post3_avg_min_temp = parseFloat(data[9].avg_min_temp),
            post3_avg_temp = parseFloat(data[9].avg_temp), post3_total_monthly_precip = parseFloat(data[9].total_monthly_precip), post3_total_snowfall = parseFloat(data[9].total_snowfall)
        const post4_year_month = data[10].year_month, post4_avg_max_temp = parseFloat(data[10].avg_max_temp), post4_avg_min_temp = parseFloat(data[10].avg_min_temp),
            post4_avg_temp = parseFloat(data[10].avg_temp), post4_total_monthly_precip = parseFloat(data[10].total_monthly_precip), post4_total_snowfall = parseFloat(data[10].total_snowfall)
        const post5_year_month = data[11].year_month, post5_avg_max_temp = parseFloat(data[11].avg_max_temp), post5_avg_min_temp = parseFloat(data[11].avg_min_temp),
            post5_avg_temp = parseFloat(data[11].avg_temp), post5_total_monthly_precip = parseFloat(data[11].total_monthly_precip), post5_total_snowfall = parseFloat(data[11].total_snowfall)
        const post6_year_month = data[12].year_month, post6_avg_max_temp = parseFloat(data[12].avg_max_temp), post6_avg_min_temp = parseFloat(data[12].avg_min_temp),
            post6_avg_temp = parseFloat(data[12].avg_temp), post6_total_monthly_precip = parseFloat(data[12].total_monthly_precip), post6_total_snowfall = parseFloat(data[12].total_snowfall)

        this.setState({ wban: wban, year_month: year_month,
          avg_max_temp: avg_max_temp, avg_min_temp: avg_min_temp, avg_temp: avg_temp,
          date_max24_hr_precip: date_max24_hr_precip, date_max24_hr_snowfall: date_max24_hr_snowfall,
          days_with_precip_ge_p01inch: days_with_precip_ge_p01inch, days_with_precip_ge_p10inch: days_with_precip_ge_p10inch,
          days_with_snowfall_ge_1p0inch: days_with_snowfall_ge_1p0inch, departure_from_normal: departure_from_normal,
          departure_from_normal_precip: departure_from_normal_precip, departure_max_temp: departure_max_temp, departure_min_temp: departure_min_temp,
          max24_hr_precip: max24_hr_precip, max24_hr_snowfall: max24_hr_snowfall, total_monthly_precip: total_monthly_precip, total_snowfall: total_snowfall,
          pre6_year_month: pre6_year_month, pre6_avg_max_temp: pre6_avg_max_temp, pre6_avg_min_temp: pre6_avg_min_temp, pre6_avg_temp: pre6_avg_temp,
            pre6_total_monthly_precip: pre6_total_monthly_precip, pre6_total_snowfall: pre6_total_snowfall,
          pre5_year_month: pre5_year_month, pre5_avg_max_temp: pre5_avg_max_temp, pre5_avg_min_temp: pre5_avg_min_temp, pre5_avg_temp: pre5_avg_temp,
            pre5_total_monthly_precip: pre5_total_monthly_precip, pre5_total_snowfall: pre5_total_snowfall,
          pre4_year_month: pre4_year_month, pre4_avg_max_temp: pre4_avg_max_temp, pre4_avg_min_temp: pre4_avg_min_temp, pre4_avg_temp: pre4_avg_temp,
            pre4_total_monthly_precip: pre4_total_monthly_precip, pre4_total_snowfall: pre4_total_snowfall,
          pre3_year_month: pre3_year_month, pre3_avg_max_temp: pre3_avg_max_temp, pre3_avg_min_temp: pre3_avg_min_temp, pre3_avg_temp: pre3_avg_temp,
            pre3_total_monthly_precip: pre3_total_monthly_precip, pre3_total_snowfall: pre3_total_snowfall,
          pre2_year_month: pre2_year_month, pre2_avg_max_temp: pre2_avg_max_temp, pre2_avg_min_temp: pre2_avg_min_temp, pre2_avg_temp: pre2_avg_temp,
            pre2_total_monthly_precip: pre2_total_monthly_precip, pre2_total_snowfall: pre2_total_snowfall,
          pre1_year_month: pre1_year_month, pre1_avg_max_temp: pre1_avg_max_temp, pre1_avg_min_temp: pre1_avg_min_temp, pre1_avg_temp: pre1_avg_temp,
            pre1_total_monthly_precip: pre1_total_monthly_precip, pre1_total_snowfall: pre1_total_snowfall,
          post1_year_month: post1_year_month, post1_avg_max_temp: post1_avg_max_temp, post1_avg_min_temp: post1_avg_min_temp, post1_avg_temp: post1_avg_temp,
            post1_total_monthly_precip: post1_total_monthly_precip, post1_total_snowfall: post1_total_snowfall,
          post2_year_month: post2_year_month, post2_avg_max_temp: post2_avg_max_temp, post2_avg_min_temp: post2_avg_min_temp, post2_avg_temp: post2_avg_temp,
            post2_total_monthly_precip: post2_total_monthly_precip, post2_total_snowfall: post2_total_snowfall,
          post3_year_month: post3_year_month, post3_avg_max_temp: post3_avg_max_temp, post3_avg_min_temp: post3_avg_min_temp, post3_avg_temp: post3_avg_temp,
            post3_total_monthly_precip: post3_total_monthly_precip, post3_total_snowfall: post3_total_snowfall,
          post4_year_month: post4_year_month, post4_avg_max_temp: post4_avg_max_temp, post4_avg_min_temp: post4_avg_min_temp, post4_avg_temp: post4_avg_temp,
            post4_total_monthly_precip: post4_total_monthly_precip, post4_total_snowfall: post4_total_snowfall,
          post5_year_month: post5_year_month, post5_avg_max_temp: post5_avg_max_temp, post5_avg_min_temp: post5_avg_min_temp, post5_avg_temp: post5_avg_temp,
            post5_total_monthly_precip: post5_total_monthly_precip, post5_total_snowfall: post5_total_snowfall,
          post6_year_month: post6_year_month, post6_avg_max_temp: post6_avg_max_temp, post6_avg_min_temp: post6_avg_min_temp, post6_avg_temp: post6_avg_temp,
            post6_total_monthly_precip: post6_total_monthly_precip, post6_total_snowfall: post6_total_snowfall
        })
      } else {
        alert("Sorry, no data was found for this date and location, please try again")
      }
    })
  }

  render() {

    // precip: max24_hr_precip, date_max24_hr_precip
    // precip: days_with_precip_ge_p01inch, days_with_precip_ge_p10inch,

    // snow: max24_hr_snowfall, date_max24_hr_snowfall
    // snow: days_with_snowfall_ge_1p0inch

    const { wban, year_month,
      avg_max_temp, avg_min_temp, avg_temp,

      days_with_precip_ge_p01inch, days_with_precip_ge_p10inch,
      days_with_snowfall_ge_1p0inch, departure_from_normal,
      departure_from_normal_precip, departure_max_temp, departure_min_temp,
      date_max24_hr_precip, date_max24_hr_snowfall,
      max24_hr_precip, max24_hr_snowfall, total_monthly_precip, total_snowfall } = this.state

      let date = this.props.date
      let year_month_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(0,4)}`
      let month_1 = `${DateParser[parseInt(date.slice(4,6), 10)].slice(0,3)}`

      let total_monthly_precip_1 = total_monthly_precip === "" ? " LOADING" : ( total_monthly_precip === "M" ? " M" : ` ${total_monthly_precip}"` )
      let departure_from_normal_precip_1 = ( departure_from_normal_precip === "M" || departure_from_normal_precip === "" ) ? "" : ( departure_from_normal_precip > 0 ? ` (+${departure_from_normal_precip}")` : ` (${departure_from_normal_precip}")` )

      let total_snowfall_1 = total_snowfall === "" ? " LOADING" : ( total_snowfall === "M" ? " M" : ` ${total_snowfall}"` )

      let max24_hr_precip_1 = max24_hr_precip === "" ? " LOADING" : ( max24_hr_precip === "M" ? " M" : ` ${max24_hr_precip}" (${month_1} ${date_max24_hr_precip})` )
      let days_with_precip_ge_p01inch_1 = days_with_precip_ge_p01inch === "" ? " LOADING" : ( days_with_precip_ge_p01inch === "M" ? " M" : ` ${days_with_precip_ge_p01inch}` )
      let days_with_precip_ge_p10inch_1 = days_with_precip_ge_p10inch === "" ? " LOADING" : ( days_with_precip_ge_p10inch === "M" ? " M" : ` ${days_with_precip_ge_p10inch}` )

      let max24_hr_snowfall_1 = max24_hr_snowfall === "" ? " LOADING" : ( max24_hr_snowfall === "M" ? " M" : ` ${max24_hr_snowfall}" (${month_1} ${date_max24_hr_snowfall})` )
      let days_with_snowfall_ge_1p0inch_1 = days_with_snowfall_ge_1p0inch === "" ? " LOADING" : ( days_with_snowfall_ge_1p0inch === "M" ? " M" : ` ${days_with_snowfall_ge_1p0inch}` )

    return (
      <div>
        <br />
        <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">

          <Grid.Row>
            <Grid.Column>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='rain' color="blue" />
                    { ` ${total_monthly_precip_1}${departure_from_normal_precip_1}` }
                  </Statistic.Value>
                <Statistic.Label>Total Monthly Precip</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <h1><strong> { year_month_1 } </strong></h1>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='snowflake outline' color="blue" />
                    { total_snowfall_1 }
                  </Statistic.Value>
                <Statistic.Label>Total Monthly Snowfall</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='resize vertical'/>
                    { max24_hr_precip_1 }
                  </Statistic.Value>
                <Statistic.Label>Max 24 Hour Precip</Statistic.Label>
                <br />
                <Statistic.Value>
                  <Icon name='calendar' />
                  { days_with_precip_ge_p01inch_1 } / { days_with_precip_ge_p10inch_1 }
                </Statistic.Value>
                <Statistic.Label>Days >= 0.01" / 0.10"</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Temperatures avg_max_temp={avg_max_temp} avg_min_temp={avg_min_temp} avg_temp={avg_temp} departure_max_temp={departure_max_temp} departure_min_temp={departure_min_temp} departure_from_normal={departure_from_normal} />
            <Grid.Column>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='resize vertical'/>
                    { max24_hr_snowfall_1 }
                  </Statistic.Value>
                <Statistic.Label>Max 24 Hour Snowfall</Statistic.Label>
                <br />
                <Statistic.Value>
                  <Icon name='calendar' />
                  { days_with_snowfall_ge_1p0inch_1 }
                </Statistic.Value>
                <Statistic.Label>Days >= 1"</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Graph data={this.state} />
      </div>
    )
  }
}
