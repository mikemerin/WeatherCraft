import React, { Component } from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: moment('20150123')
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    console.log(date)
    this.setState({ startDate: date })
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    if (this.state.startDate !== nextState.startDate) {
      console.log('startdate: ', nextState)
    }
  }

  render() {

    const { stateChoices, stationState, stations, date, handleStateChange, handleDateChange, handleStationChange } = this.props

    return (
      <Grid className="centered">
        <Grid.Row>
          <Grid.Column width={8}>
            <Dropdown placeholder='Select a State'
                      fluid search selection options={ stateChoices }
                      onChange={ handleStateChange } />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Dropdown placeholder='Select a Station'
                      fluid search selection options={ stations.filter(x => x.state === stationState).map((x, i) => ({key: i, value: x.state, text: x.name}) ) }
                      onChange={ handleStationChange } />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <DatePicker
              dateFormat="YYYY/MM/DD"
              selected={ this.state.startDate }
              onSelect={ this.handleChange }
              minDate={moment('2007-05-01', 'YYYY-MM-DD')}
              maxDate={moment('2017-06-30', 'YYYY-MM-DD')}
              placeholderText="Select a date"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

// selected={ props.date }

// <InfiniteCalendar width={300}
// height={400}
//
// selected={today}
// disabledDays={[0,6]}
// min={new Date(2007, 7, 1)}
// max={new Date(2017, 6, 30)}
// minDate={new Date(2007, 7, 1)}
// maxDate={new Date(2017, 6, 30)}
//
// />




  // <Calendar format='MM/DD/YYYY' date={ `${props.date.slice(4,6)}-${props.date.slice(6,8)}-${props.date.slice(0,4)}` }
  // onChange={ props.handleDateChange } />
