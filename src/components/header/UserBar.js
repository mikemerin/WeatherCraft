import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserBar extends Component {
  render() {
    return (
          <Link to="/favorites">Hello Mike!</Link>
    )
  }
}
