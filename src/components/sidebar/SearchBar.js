import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid, Dropdown } from 'semantic-ui-react'

import { other_states } from '../helpers/StateChoices'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchBar(props) {

  const { stateChoices, stationState, stations, handleStateChange, handleDateChange, handleStationChange } = props
  const filtered_stations = stations.filter(x => {
    // console.log(stationState === "OTHER")
    //.sort((a,b) => a.location.toLowerCase() > b.location.toLowerCase())
    return x.state === ( stationState === "OTHER" ? "" : stationState )
  }).map((x, i) => {
    return ({key: i, value: x.name, text: `${x.location} - ${x.name}`})
  })

  const selected = props.date.format('YYYYMMDD') === moment().format('YYYYMMDD') ? null : props.date


  return (
    <Grid className="centered" textAlign="center">
      <Grid.Row>
        <Grid.Column width={8}>
          <Dropdown placeholder='Select a State'
                    selected="custom"
                    fluid search selection options={ stateChoices }
                    onChange={ handleStateChange } />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Dropdown placeholder='Select a Station'
                    fluid search selection options={ filtered_stations }
                    onChange={ handleStationChange } />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Switch>
            <Route path='/station/:callsign' render={(routerProps) => {
              return (
                <div>
                  <DatePicker
                      dateFormat="YYYY/MM/DD"
                      selected={ selected }
                      onSelect={ handleDateChange }
                      min={moment('2007-05-01', 'YYYY-MM-DD')}
                      max={moment('2017-08-31', 'YYYY-MM-DD')}
                      minDate={moment('2007-05-01', 'YYYY-MM-DD')}
                      maxDate={moment('2017-08-31', 'YYYY-MM-DD')}
                      placeholderText="Select a date"
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div> )
            }} />
          </Switch>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
