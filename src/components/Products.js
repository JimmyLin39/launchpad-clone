import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '../UI/LinearProgress'

import useProductsData from '../hooks/useProductsData'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1
  },
  productTitle: {
    height: 56
  },
  button: {
    display: 'block',
    width: '100%',
    marginTop: 10
  }
})
const loader = (
  <Grid container direction='row' justify='center'>
    <div style={{ margin: 20 }}>
      <CircularProgress />
    </div>
  </Grid>
)

export default function Products() {
  // products per load
  const limit = 24
  const {
    products,
    totalCount,
    offset,
    errorMsg,
    loadMoreLoading,
    handleLoadMore
  } = useProductsData(limit)
  const classes = useStyles()

  const loadMore = () => {
    // load more loading icon
    if (loadMoreLoading) {
      return loader
      // reach last page
    } else if (offset + limit > totalCount) {
      return null
      // load more button
    } else {
      return (
        <Grid container direction='row' justify='center'>
          <div style={{ margin: 20 }}>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        </Grid>
      )
    }
  }
  if (!products.length) {
    if (errorMsg) {
      return (
        <Typography variant='h6' component='h6' color='primary'>
          {errorMsg}
        </Typography>
      )
    }
    return loader
  }
  return (
    <div className='products-container'>
      <Grid
        container
        direction='row'
        alignItems='flex-end'
        justify='space-between'
      >
        <Typography variant='h3' component='h3'>
          Boost these innovative products
        </Typography>
        <Typography gutterBottom variant='subtitle1' component='p'>
          {totalCount ? totalCount : null} Results
        </Typography>
      </Grid>

      <Grid container spacing={2}>
        {products.map(product => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardMedia
                component='img'
                alt={product.name}
                height='250'
                image={product.featuredImage}
                title={product.name}
              />
              <CardContent>
                <Typography variant='subtitle2' component='h4'>
                  {product.companyName}
                </Typography>
                <Typography
                  className={classes.productTitle}
                  gutterBottom
                  variant='subtitle1'
                  component='h3'
                >
                  {product.name}
                </Typography>
                <Typography vatiant='body1' component='p'>
                  {product.totalWants} Boosts
                </Typography>
                <LinearProgress value={product.totalWants / 100} />
                <Button
                  className={classes.button}
                  size='small'
                  variant='outlined'
                  color='primary'
                >
                  BOOST IT
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid container direction='row' justify='center'>
          <Typography
            variant='h6'
            component='h6'
            color='primary'
            align='center'
          >
            {errorMsg}
          </Typography>
        </Grid>
        {loadMore()}
      </Grid>
    </div>
  )
}
