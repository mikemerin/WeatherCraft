import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'

import Daily from '../components/data/Daily'
// import Monthly from '../components/data/Monthly'

export default class DataContainer extends Component {

  // constructor() {
  //   super()
  // }

  render() {

    return (
      <div>

        <Daily date={ this.props.date } station={ this.props.station } />

      </div>
    )
  }

}


//<Monthly date={ this.props.date } station={ this.props.station }/>
// <Route exact path='/:wban' render={() =>  <Daily date={ this.props.date } station={ this.props.station } />  } />
