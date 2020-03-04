import React from 'react'
import Products from './Products'

import Typography from '@material-ui/core/Typography'

export default function Application(props) {
  return (
    <main>
      <Typography variant='h2' component='h2'>
        Launch Pad
      </Typography>
      <section>
        <Products />
      </section>
    </main>
  )
}
