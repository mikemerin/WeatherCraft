import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import UserBar from '../components/header/UserBar'
import NavBar from '../components/header/NavBar'

export default class HeaderContainer extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="middle floated column"><NavBar /></div>
          <div className="right floated column"><UserBar /></div>
        </div>
      </div>
    )
  }

}
