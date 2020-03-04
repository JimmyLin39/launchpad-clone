import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import useProductsData from '../hooks/useProductsData'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    maxWidth: 345,
    flexGrow: 1
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
  const {
    products,
    totalCount,
    loadMoreLoading,
    handleLoadMore
  } = useProductsData()
  const classes = useStyles()
  if (!products.length) {
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
              <CardActionArea>
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
                  <Typography gutterBottom variant='subtitle1' component='h3'>
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' variant='outlined' color='primary'>
                  BOOST IT
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {loadMoreLoading ? (
          loader
        ) : (
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
        )}
      </Grid>
    </div>
  )
}
