import React, { Component } from 'react'

import SearchBar from '../components/sidebar/SearchBar'
import StationInfo from '../components/sidebar/StationInfo'
import Map from '../components/sidebar/Map'
import { united_states, other_states } from '../components/StateChoices'
import { StationsAdapter } from '../adapters'


export default class SideBarContainer extends Component {

  constructor() {
    super()
    this.state = {
      stationState: '',
      stations: [],
      stateChoices: united_states
    }
    this.handleStateChange = this.handleStateChange.bind(this)
    // this.handleStationChange = this.handleStationChange.bind(this)
  }

  componentDidMount() {
    StationsAdapter.all().then(data => {
      this.setState({ stations: data.slice(0) })
    } )

  }

  handleStateChange(event, result){
    event.preventDefault()
    this.setState({ stationState: result.value })
    // console.log(other_states.map(x => x.value).includes(this.state.stationState))
  }

  // handleStationChange(event) {
  //   event.preventDefault()
  //   console.log(this.state.stations.find(x => x.name === event.target.innerText).wban)
  //   return this.state.stations.find(x => x.name === event.target.innerText).wban
  //   // console.log(event.target.innerText)
  //   // this.setState({ stationID: event.target.innerText })
  //   // debugger
  //
  // }

  render() {
    return (
      <div>
        <SearchBar stateChoices={ this.state.stateChoices }
                   stations={ this.state.stations }
                   stationState={ this.state.stationState }
                   handleStateChange={ this.handleStateChange }
                   handleStationChange={ this.props.handleStationChange }/>
        <StationInfo />
        <Map />
      </div>
    )
  }
}

// props.stations.filter(x => x.state === props.stationState).count
