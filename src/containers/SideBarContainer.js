import React, { Component } from 'react'

import SearchBar from '../components/sidebar/SearchBar'
import StationInfo from '../components/sidebar/StationInfo'
import Map from '../components/sidebar/Map'

export default class SideBarContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <StationInfo />
        <Map />
      </div>
    )
  }
}
