import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'

import SearchBar from '../components/sidebar/SearchBar'
import StationInfo from '../components/sidebar/StationInfo'
import Map from '../components/sidebar/Map'


export default class SideBarContainer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="centered">
        <SearchBar stateChoices={ this.props.stateChoices }
                   date={ this.props.date }
                   stations={ this.props.stations }
                   stationState={ this.props.stationState }
                   handleDateChange={ this.props.handleDateChange }
                   handleStateChange={ this.props.handleStateChange }
                   handleStationChange={ this.props.handleStationChange }/>

        <br></br>
        <StationInfo station={ this.props.station } />
        <br></br>
        <Map station={ this.props.station }/>
      </div>
    )
  }
}

// props.stations.filter(x => x.state === props.stationState).count

// <Switch>
//   <Route exact path='/:wban' render={(routerProps) => {
//
//     return <StationInfo date={ routerProps.date }
//                         station={ routerProps.station } />
//     }} />
// </Switch>
