import React from 'react'
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#2FAECD', 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#2FAECD'
  }
})(LinearProgress)

export default function LinearProgess({ value }) {
  return (
    <BorderLinearProgress variant='determinate' color='primary' value={value} />
  )
}
