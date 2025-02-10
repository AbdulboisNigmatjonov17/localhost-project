import React from 'react'
import FooterMain from '../../components/footer/FooterMain'
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/details/ProductDetail'

const ProductDetailPage = () => {
  const params = useParams()
  return (
    <>
    <ProductDetail id={params.id}/>
      <FooterMain />
    </>
  )
}

export default ProductDetailPage