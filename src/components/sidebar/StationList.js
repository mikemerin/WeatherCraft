import React, { Component } from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'

export default class SearchBar extends Component {

  constructor() {
    super()

    this.filterStations = this.filterStations.bind(this)
  }

  filterStations() {

    this.props.stations.filter(station => {
      if (this.props.stationState === "OTHER")
        { debugger }
      else
        { station.state === this.props.stationState }
    }).map((x, i) => ({key: i, value: x.state, text: x.name}) )
  }


  render() {
    return (
      <Grid className="centered">
        <Grid.Row>
          <Grid.Column width={8}>
            <Dropdown placeholder='Select a State'
                      fluid search selection options={ this.props.stateChoices }
                      onChange={this.props.handleStateChange} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Dropdown placeholder='Select a Station'
                      fluid search selection options={ this.filterStations() }
                      onChange={this.props.handleStationChange} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}
// props.stations.filter(x => x.state === props.stationState).map((x, i) => ({key: i, value: x.state, text: x.name}) )
