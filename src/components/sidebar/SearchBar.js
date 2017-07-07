import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchBar(props) {

  const { stateChoices, stationState, stations, station, date, handleStateChange, handleDateChange, handleStationChange } = props
  const filtered_stations = stations.filter(x => x.state === stationState).map((x, i) => ({key: i, value: x.name, text: x.name}) )

  const selected = props.date.format('YYYYMMDD') === moment().format('YYYYMMDD') ? null : props.date


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
                    fluid search selection options={ filtered_stations }
                    onChange={ handleStationChange } />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Switch>
            <Route path='/station/:callsign' render={() => {
              return (
                <DatePicker
                    dateFormat="YYYY/MM/DD"
                    selected={ selected }
                    onSelect={ props.handleDateChange }
                    min={moment('2007-05-01', 'YYYY-MM-DD')}
                    max={moment('2017-06-30', 'YYYY-MM-DD')}
                    minDate={moment('2007-05-01', 'YYYY-MM-DD')}
                    maxDate={moment('2017-06-30', 'YYYY-MM-DD')}
                    placeholderText="Select a date"
                  /> )
            }} />
          </Switch>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
