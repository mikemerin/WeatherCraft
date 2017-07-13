import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: "Main"
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }



  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    const URL = `/station/${this.props.callsign}/${this.props.date}`

    return (
      <Menu pointing secondary>
        <Menu.Item name='Daily' as={Link} to={`${URL}`} active={activeItem === 'Daily'} onClick={this.handleItemClick} />
        <Menu.Item name='Monthly' as={Link} to={`${URL}/monthly`} active={activeItem === 'Monthly'} onClick={this.handleItemClick} />
        <Menu.Item name='History' as={Link} to={`${URL}/history`} active={activeItem === 'History'} onClick={this.handleItemClick} />
      </Menu>
    )}


}


// <Menu.Item name='Main' as={Link} to={`${URL}`} active={activeItem === 'Main'} onClick={this.handleItemClick} />
// <Menu.Item name='Future' as={Link} to={`${URL}/future`} active={activeItem === 'Future'} onClick={this.handleItemClick} />
