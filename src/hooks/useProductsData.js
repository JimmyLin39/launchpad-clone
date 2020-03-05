import { useState, useEffect } from 'react'

export default function useProductsData(limit) {
  const [products, setProducts] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loadMoreLoading, setloadMoreLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  useEffect(() => {
    fetch(
      `https://api1.socialnature.com/api/v1/products/launchpad?limit=${limit}&offset=${offset}&country=all`
    )
      .then(res => res.json())
      .then(res => {
        setErrorMsg(null)
        if (products.length) {
          throw new Error('error')
        }
        setTotalCount(res.totalCount)
        setProducts(products => products.concat(res.products))
        setloadMoreLoading(false)
      })
      .catch(error => {
        console.error(error)
        setloadMoreLoading(false)
        setErrorMsg('Something went wrong, please check again later.')
      })
  }, [offset])
  const handleLoadMore = () => {
    setloadMoreLoading(true)
    setOffset(offset => offset + limit)
  }
  return {
    products,
    totalCount,
    offset,
    errorMsg,
    loadMoreLoading,
    handleLoadMore
  }
}
