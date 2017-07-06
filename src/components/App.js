import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
// import { Route, Switch } from 'react-router-dom'

// import moment from 'moment';

import HeaderContainer from '../containers/HeaderContainer'
import SideBarContainer from '../containers/SideBarContainer'
import DataContainer from '../containers/DataContainer'
import VisualContainer from '../containers/VisualContainer'

import { united_states, other_states } from './helpers/StateChoices'
import { StationsAdapter } from '../adapters'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      // date: moment(),
      date: "20160123",
      station: {callsign: "NYC", created_at: "2017-06-30T17:06:21.492Z", ground_height: "156",
                id: 4714, latitude: "40.783", location: "NEW YORK", longitude: "-73.967",
                name: "CENTRAL PARK", station_height: "161",
                state: united_states.find(x => x.value === "NY").text.toUpperCase(),
                updated_at: "2017-07-05T00:18:37.822Z", wban: "94728"},
      stationState: '',
      stations: [],
      stateChoices: united_states
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleStationChange = this.handleStationChange.bind(this)
  }

  componentDidMount() {
    StationsAdapter.all().then(data => {
      this.setState({ stations: data.slice(0) })
    } )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.station !== this.state.station) {
      window.history.pushState(null, null, `/${this.state.station.wban}`)
    }
  }

  handleStateChange(event, result){
    event.preventDefault()
    this.setState({ stationState: result.value })
    // console.log(other_states.map(x => x.value).includes(this.state.stationState))
  }

  handleStationChange(event) {
    event.preventDefault()
    // console.log(this.state.stations.find(x => x.name === event.target.innerText).wban)
    const station =  this.state.stations.find(x => x.name === event.target.innerText)
    this.setState({ station: station })
  }


  handleDateChange(date) {
    // disabled for now
    console.log(date)
    // this.state.date._d.toString().split(" ")
    // this.setState({ date: date });
  }

  render() {
    return (
      <Grid celled className="centered">

        <Grid.Column width={4} textAlign="center">
          <SideBarContainer date={ this.state.date }
                            stationState={ this.state.stationState }
                            stations={ this.state.stations }
                            station={ this.state.station }
                            stateChoices={ this.state.stateChoices }
                            handleStateChange={ this.handleStateChange }
                            handleDateChange={ this.handleDateChange }
                            handleStationChange={ this.handleStationChange }/>
        </Grid.Column>

        <Grid.Column width={12}>
          <Grid.Row>
            <HeaderContainer />
          </Grid.Row>
          <Grid.Row>
            <DataContainer date={ this.state.date } station={ this.state.station }/>
          </Grid.Row>
          <Grid.Row>
            <VisualContainer date={ this.state.date } station={ this.state.station }/>
          </Grid.Row>
        </Grid.Column>

      </Grid>
    )
  }
}
