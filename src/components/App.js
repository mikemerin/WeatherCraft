import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Grid } from 'semantic-ui-react'

import HeaderContainer from '../containers/HeaderContainer'
import SideBarContainer from '../containers/SideBarContainer'
import DataContainer from '../containers/DataContainer'
import VisualContainer from '../containers/VisualContainer'

// other_states will be used in the future
import { united_states } from './helpers/StateChoices'
import { StationsAdapter } from '../adapters'
import moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: moment(),
      station: {},
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
  // if the station changed, but only if the stationState didn't and it didn't start from ''
    if (prevState.station !== this.state.station &&
        prevState.stationState === this.state.stationState &&
        prevState.stationState !== '') {
      window.history.pushState(null, null, `/station/${this.state.station.callsign}`)
    }
  }

  handleStateChange(event, result){
    event.preventDefault()
    window.history.pushState(null, null, '/')
    this.setState({ stationState: result.value, station: '' })
    // console.log(other_states.map(x => x.value).includes(this.state.stationState))
  }

  handleStationChange(event, result) {
    event.preventDefault()
    console.log(event.target)
    // console.log(this.state.stations.find(x => x.name === event.target.innerText).wban)
    const station = this.state.stations.find(x => x.name === result.value)
    this.setState({ station: station })
  }

  handleDateChange(date) {
    this.setState({ date: date });
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
            <Route exact path="/" render={() => {
          return <p>This is an app all about students</p>
        }} />
          </Grid.Row>
          <Switch>
            <Route path="/station" render={() => {
              return (
                <div>
                  <Grid.Row>
                    <DataContainer date={ this.state.date._i.replace(/-/g,"") } station={ this.state.station }/>
                  </Grid.Row>
                  <Grid.Row>
                    <VisualContainer date={ this.state.date._i.replace(/-/g,"") } station={ this.state.station }/>
                  </Grid.Row>
                </div>
              )
            }} />
          </Switch>
        </Grid.Column>

      </Grid>
    )

  }
}
