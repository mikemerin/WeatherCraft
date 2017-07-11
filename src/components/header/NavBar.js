import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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
        <Menu.Item name='Main' as={Link} to={`${URL}`} active={activeItem === 'Main'} onClick={this.handleItemClick} />
        <Menu.Item name='Daily' as={Link} to={`${URL}/daily`} active={activeItem === 'Daily'} onClick={this.handleItemClick} />
        <Menu.Item name='Monthly' as={Link} to={`${URL}/monthly`} active={activeItem === 'Monthly'} onClick={this.handleItemClick} />
        <Menu.Item name='History' as={Link} to={`${URL}/history`} active={activeItem === 'History'} onClick={this.handleItemClick} />
        <Menu.Item name='Future' as={Link} to={`${URL}/future`} active={activeItem === 'Future'} onClick={this.handleItemClick} />
      </Menu>
    )}


}


//
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Tab } from 'semantic-ui-react'
// import PropTypes from 'prop-types';
//
// export default function NavBar(props) {
//
//   // static contextTypes = {
//   //   router: PropTypes.object
//   // }
//
//   // debugger
//
//   const URL = `/station/${props.callsign}/${props.date}`
//
//   const panes = [
//     { menuItem: 'Main', as: {Link}, to: {URL}, render: () => {""} },
//     { menuItem: 'Daily', path: `${URL}/daily`, render: () => {""} },
//     { menuItem: 'Monthly', path: `${URL}/monthly`, render: () => {""} },
//     { menuItem: 'History', path: `${URL}/history`, render: () => {""} },
//     { menuItem: 'Future', path: `${URL}/future`, render: () => {""} },
//   ]
//
//   return (
//     <Tab menu={{ secondary: true, pointing: true }}
//         panes={panes}
//         callsign={ props.callsign }
//         date={ props.date } />
//   )
//
// }
