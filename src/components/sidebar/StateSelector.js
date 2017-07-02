import React, { Component } from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'

export default class SearchBar extends Component {

  return (
    <Grid className="centered">
      <Grid.Column width={8}>
      <Dropdown placeholder='Select a State'
                fluid search selection options={props.stateChoices}
                onChange={props.handleStateChange} />
      </Grid.Column>
    </Grid>
  )
}
