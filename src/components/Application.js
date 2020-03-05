import React from 'react'
import Products from './Products'

import Typography from '@material-ui/core/Typography'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2FAECD' }
  }
})

export default function Application(props) {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Typography variant='h2' component='h2'>
          Launch Pad Clone
        </Typography>
        <section>
          <Products />
        </section>
      </main>
    </ThemeProvider>
  )
}
