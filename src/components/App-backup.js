import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import HeaderContainer from '../containers/HeaderContainer'
import SideBarContainer from '../containers/SideBarContainer'
import DataContainer from '../containers/DataContainer'
import VisualContainer from '../containers/VisualContainer'
// import logo from '../logo.svg';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      stationID: '',
      date: ''
    }
    this.handleStationChange = this.handleStationChange.bind(this)
  }

  handleStationChange(event) {
    event.preventDefault()
    console.log(this.state.stations.find(x => x.name === event.target.innerText).wban)
    const stationID =  this.state.stations.find(x => x.name === event.target.innerText).wban

    this.setState({ stationID: stationID })
    debugger

  }

  render() {
    return (
      <Grid celled className="centered">

        <Grid.Column width={4}>
          <SideBarContainer date={ this.date }
                            stationID={ this.stationID }
                            handleStationChange={ this.handleStationChange }/>
        </Grid.Column>

        <Grid.Column width={12}>
          <Grid.Row>
            <HeaderContainer />
          </Grid.Row>
          <Grid.Row>
            <DataContainer date={ this.date } stationID={ this.stationID }/>
          </Grid.Row>
          <Grid.Row>
            <VisualContainer date={ this.date } stationID={ this.stationID }/>
          </Grid.Row>
        </Grid.Column>

      </Grid>
    )
  }
}
