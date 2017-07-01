import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'

import HeaderContainer from '../containers/HeaderContainer'
import SideBarContainer from '../containers/SideBarContainer'
import DataContainer from '../containers/DataContainer'
import VisualContainer from '../containers/VisualContainer'
import logo from '../logo.svg';

import { united_states, other_states } from './StateChoices'

import { StationsAdapter } from '../adapters'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      stationState: '',
      stationName: '',
      date: ''
    }

  }

  componentDidMount() {
    StationsAdapter.all().then(data => {
      debugger
      // var array = []
      // var repeated = false
      //
      // // only list unique symptoms
      // data.forEach(d => {
      //     repeated = false
      //     for (let a in array )
      //       { array[a].symptom === d.symptom ? repeated = true : null }
      //     repeated === false ? array.push(d) : null
      //   })
      //
      // this.setState({ allTreatments: data, symptoms: array})
    } )
  }

  render() {
    return (
      <Grid celled>
        <Grid.Column width={4}>
          <SideBarContainer />
        </Grid.Column>
        <Grid.Column width={12}>
          <Grid.Row>
            <HeaderContainer />
          </Grid.Row>
          <Grid.Row>
            <DataContainer />
          </Grid.Row>
          <Grid.Row>
            <VisualContainer />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}
