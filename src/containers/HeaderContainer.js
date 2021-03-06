import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import UserBar from '../components/header/UserBar'
import NavBar from '../components/header/NavBar'

export default class HeaderContainer extends Component {

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
          <Switch>
            <Route path='/station/:callsign/:date' render={routerProps => {
              const { callsign, date } = routerProps.match.params
              return <NavBar callsign={callsign} date={date} routerProps={routerProps}/>
            }} />
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={2}>
          <UserBar />
        </Grid.Column>
      </Grid>
    )
  }

}
