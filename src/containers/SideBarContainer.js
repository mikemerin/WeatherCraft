import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchBar from '../components/sidebar/SearchBar'
import StationInfo from '../components/sidebar/StationInfo'
import Map from '../components/sidebar/Map'


export default class SideBarContainer extends Component {

  // constructor() {
  //   super()
  // }

  render() {

    const { stateChoices, date, stations, station, stationState,
            handleDateChange, handleStateChange, handleStationChange } = this.props

    return (
      <div className="centered">
        <SearchBar stateChoices={ stateChoices }
                   date={ date }
                   stations={ stations }
                   station={ station }
                   stationState={ stationState }
                   handleDateChange={ handleDateChange }
                   handleStateChange={ handleStateChange }
                   handleStationChange={ handleStationChange }/>

        <Switch>
          <Route path='/station/:id' render={(routerProps) => {
            console.log(routerProps)
            // console.log(id)
            return (
              <div>
                <br></br>
                <StationInfo station={ station } />
                <br></br>
                <Map station={ station }/>
              </div>
            )
          }} />
        </Switch>
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
