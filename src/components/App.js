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
      stationName: '',
      date: ''
    }
  }

  render() {
    return (
      <Grid celled>

        <Grid.Column width={4}>
          <SideBarContainer date={this.date} stationName={this.stationName}/>
        </Grid.Column>

        <Grid.Column width={12}>
          <Grid.Row>
            <HeaderContainer />
          </Grid.Row>
          <Grid.Row>
            <DataContainer date={this.date} stationName={this.stationName}/>
          </Grid.Row>
          <Grid.Row>
            <VisualContainer date={this.date} stationName={this.stationName}/>
          </Grid.Row>
        </Grid.Column>

      </Grid>
    )
  }
}
