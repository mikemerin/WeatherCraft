import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Daily from '../components/data/Daily/Container'
import Monthly from '../components/data/Monthly/Container'
import Historical from '../components/data/Historical/Container'
import Trends from '../components/data/Trends/Container'

export default class DataContainer extends Component {

  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/station/:wban/:date" render={(routerProps) => {
            // routerProps.match.params.wban = routerProps.match.params.wban.toUpperCase()
            return <Daily date={ this.props.date } station={ this.props.station } />
          }} />
          <Route exact path="/station/:wban/:date/monthly" render={(routerProps) => {
            return <Monthly date={ this.props.date } station={ this.props.station } />
          }} />
          <Route exact path="/station/:wban/:date/historical" render={(routerProps) => {
            return <Historical date={ this.props.date } station={ this.props.station } />
          }} />
          <Route exact path="/station/:wban/:date/trends" render={(routerProps) => {
            return <Trends date={ this.props.date } station={ this.props.station } />
          }} />
        </Switch>
      </div>
    )
  }

}


// <Route exact path="/station/:wban/:date" render={(routerProps) => {
//   return <Main date={ this.props.date } station={ this.props.station } />
// }} />
//
// <Route exact path="/station/:wban/:date/monthly" render={(routerProps) => {
//   return <Monthly date={ this.props.date } station={ this.props.station } />
// }} />
