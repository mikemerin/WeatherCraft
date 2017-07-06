import React from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import Calendar from 'react-input-calendar'


import 'react-datepicker/dist/react-datepicker.css';


export default function SearchBar(props) {

  return (
    <Grid className="centered">
      <Grid.Row>
        <Grid.Column width={8}>
          <Dropdown placeholder='Select a State'
                    fluid search selection options={ props.stateChoices }
                    onChange={ props.handleStateChange } />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Dropdown placeholder='Select a Station'
                    fluid search selection options={ props.stations.filter(x => x.state === props.stationState).map((x, i) => ({key: i, value: x.state, text: x.name}) ) }
                    onChange={ props.handleStationChange } />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}

  // <Calendar format='DD/MM/YYYY' date='4-12-2014' />

  // <DatePicker
  // dateFormat="YYYY/MM/DD"
  // selected={ this.props.date}
  // onChange={ this.props.handleDateChange}
  // minDate={moment().subtract(38, "months")}
  // maxDate={moment().subtract(4, "days")}
  // placeholderText="Select a date" />
