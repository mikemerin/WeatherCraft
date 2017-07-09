import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tab } from 'semantic-ui-react'

export default function NavBar(props) {

  const URL = `/station/${props.callsign}/${props.date}`

  const panes = [
    { menuItem: 'Main', path: {URL}, render: () => {""} },
    { menuItem: 'Daily', path: `${URL}/daily`, render: () => {""} },
    { menuItem: 'Monthly', path: `${URL}/monthly`, render: () => {""} },
    { menuItem: 'History', path: `${URL}/history`, render: () => {""} },
    { menuItem: 'Future', path: `${URL}/future`, render: () => {""} },
  ]

  return (
    <Tab menu={{ secondary: true, pointing: true }}
        panes={panes}
        callsign={ props.callsign }
        date={ props.date } />
  )

}
