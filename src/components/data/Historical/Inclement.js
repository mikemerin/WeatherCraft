import React from 'react'
import { Grid } from 'semantic-ui-react'

import { WC } from '../../helpers/WeatherCodes'

export default function Temperatures(props) {

  const { code_sum } = props

  let code_sum_1
  if (code_sum === " ")
    { code_sum_1 = "None" }
  else
    { code_sum_1 = code_sum.split(" ").map(x => {
    switch (x.length) {
      case 2: return WC[x]
      case 3: return `${WC[x.slice(2,3)]} ${WC[x.slice(0,2)]}`
      case 4: return `${WC[x.slice(0,2)]} ${WC[x.slice(2,4)]}`
    }
  }).join(", ") }

  return (
    <Grid.Column>
      <h4>Inclement Weather:</h4>
      <p><strong> { code_sum_1 } </strong></p>
    </Grid.Column>
  )
}
