import { useState, useEffect } from 'react'

export default function useProductsData() {
  const limit = 24
  const [products, setProducts] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loadMoreLoading, setloadMoreLoading] = useState(false)
  useEffect(() => {
    fetch(
      `https://api1.socialnature.com/api/v1/products/launchpad?limit=${limit}&offset=${offset}&country=all`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setTotalCount(res.totalCount)
        setProducts(products => products.concat(res.products))
        setloadMoreLoading(false)
      })
      .catch(error => {
        console.error(error)
        setloadMoreLoading(false)
      })
  }, [offset])
  const handleLoadMore = () => {
    setloadMoreLoading(true)
    setOffset(offset => offset + limit)
  }
  return { products, totalCount, loadMoreLoading, handleLoadMore }
}
