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



  render() {
    return (
      <div>
        <SearchBar stateChoices={ this.state.stateChoices }
                   stations={ this.state.stations }
                   stationState={ this.state.stationState }
                   handleStateChange={ this.handleStateChange }/>
        <StationInfo />
        <Map />
      </div>
    )
  }
}

// props.stations.filter(x => x.state === props.stationState).count
