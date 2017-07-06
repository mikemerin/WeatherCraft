import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import UserBar from '../components/header/UserBar'
import NavBar from '../components/header/NavBar'

export default class HeaderContainer extends Component {

  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={8}>
          <NavBar />
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={2}>
          <UserBar />
        </Grid.Column>
      </Grid>
    )
  }

}
