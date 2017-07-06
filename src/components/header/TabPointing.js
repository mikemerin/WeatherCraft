import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Main' },
  { menuItem: 'Daily' },
  { menuItem: 'Monthly' },
  { menuItem: 'History' },
  { menuItem: 'Future' },
]

const TabPointing = () => (
  <Tab menu={{ pointing: true }} panes={panes} />
)

export default TabPointing
