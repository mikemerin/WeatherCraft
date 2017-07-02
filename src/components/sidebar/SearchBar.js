import React from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'

export default function SearchBar(props) {

  return (
    <Grid className="centered">
      <Grid.Row>
        <Grid.Column width={8}>
          <Dropdown placeholder='Select a State'
                    fluid search selection options={props.stateChoices}
                    onChange={props.handleStateChange} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Dropdown placeholder='Select a Station'
                    fluid search selection options={ props.stations.filter(x => x.state === props.stationState).map((x, i) => ({key: i, value: x.state, text: x.name}) ) }
                    onChange={props.handleStationChange} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
