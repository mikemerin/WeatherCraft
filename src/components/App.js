// main react files
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types';

// containers
import HeaderContainer from '../containers/HeaderContainer'
import SideBarContainer from '../containers/SideBarContainer'
import DataContainer from '../containers/DataContainer'

// constants and more. note: other_states will be imported from StateChoices in the future
import { united_states } from './helpers/StateChoices'
import { StationsAdapter } from '../adapters'
import moment from 'moment';


export default class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      date: moment(),
      station: {},
      stationState: '',
      stations: [],
      stateChoices: united_states
    }
  }


  // lifecycle methods
  componentWillMount() {
    console.log("mounting");
    // debugger
    StationsAdapter.all().then(data => {
      this.setState({ stations: data.slice(0) })
    })
    const callsign = this.context.router.history.location.pathname.split('/')[2]
    if (callsign !== undefined)
      { this.setState({ station: { latitude: 0, longitude: 0 } }) }
  }
  componentDidUpdate(prevProps, prevState) {
  // if the station changed, but only if the stationState didn't and it didn't start from ''

    if (prevState.station !== this.state.station &&
        prevState.stationState === this.state.stationState &&
        prevState.stationState !== '')
      { this.context.router.history.push(`/station/${this.state.station.callsign}`) }
    // debugger
    // const callsign = this.context.router.history.location.pathname.split('/')[2]
    // if (callsign !== undefined && )
    //   { this.setState({ station: { latitude: 0, longitude: 0 } }) }
  }

  // handlers
  handleStateChange = (event, result) => {
    event.preventDefault()
    this.context.router.history.push('/')
    this.setState({ stationState: result.value, station: '' })
    // console.log(other_states.map(x => x.value).includes(this.state.stationState))
  }
  handleStationChange = (event, result) => {
    event.preventDefault()
    // console.log(this.state.stations.find(x => x.name === event.target.innerText).wban)
    const station = this.state.stations.find(x => x.name === result.value)
    this.setState({ station: station })
  }
  handleDateChange = (date) => {
    this.setState({ date: date });
    this.context.router.history.push(`/station/${this.state.station.callsign}/${date.format('YYYYMMDD')}`)
  }

  render() {
    // debugger
    // while (this.state.station.callsign === undefined) {
    //   return (
    //     <div className="ui active inverted dimmer">
    //       <div className="ui huge text loader">Loading data, please wait</div>
    //     </div>
    //   ) }
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

        <Grid.Column width={12} textAlign="center">
          <Grid.Row>
            <HeaderContainer />
          </Grid.Row>
          <Switch>
            <Route exact path="/" render={() => {
                return (
                  <div>
                    <p></p>
                    <h1>Welcome to WeatherCraft</h1>
                    <p></p>
                    <h3>Choose a state and station to start crafting</h3>
                  </div>
                )
            }} />
          <Route path="/station/:callsign/:date" render={routerProps => {
              const { date, callsign } = routerProps.match.params
              const station = this.state.stations.find(x => x.callsign === callsign)

              return (
                <div>
                  <Grid.Row>
                    <DataContainer date={ date } station={ station }/>
                  </Grid.Row>
                </div>
              )
            }} />.
          </Switch>
        </Grid.Column>

      </Grid>
    )
  }
}

// <Route exact path="/" render={() => <p>Route tester, this will only show on '/'</p> } />
// <Route exact path="/station/:wban" render={() => <p>Route tester, this will only show on '/station/:wban'</p> } />
// <Route exact path="/station/:wban/:date" render={() => <p>Route tester, this will only show on '/station/:wban/:date'</p> } />
