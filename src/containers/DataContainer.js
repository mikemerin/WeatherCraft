import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Daily from '../components/data/Daily'
import Main from '../components/data/Main'
import Monthly from '../components/data/Monthly'

export default class DataContainer extends Component {

  // constructor() {
  //   super()
  // }

  render() {
    console.log(this.props.date)
    console.log(this.props.station)
    return (
      <div>
        <Switch>
          <Route exact path="/station/:wban/:date" render={(routerProps) => {
            return <Main date={ this.props.date } station={ this.props.station } />
          }} />
          <Route exact path="/station/:wban/:date/daily" render={(routerProps) => {
            return <Daily date={ this.props.date } station={ this.props.station } />
          }} />
          <Route exact path="/station/:wban/:date/monthly" render={(routerProps) => {
            return <Monthly date={ this.props.date } station={ this.props.station } />
          }} />
        </Switch>
      </div>
    )
  }

}


//<Monthly date={ this.props.date } station={ this.props.station }/>
// <Route exact path='/:wban' render={() =>  <Daily date={ this.props.date } station={ this.props.station } />  } />
