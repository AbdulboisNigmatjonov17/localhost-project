import React from 'react'
import FooterMain from '../../components/footer/FooterMain'
import ProductDetail from '../../components/details/ProductDetail'
import ProductDetailIages from '../../components/details/ProductDetailIages'

const ProductDetailPage = () => {
  return (
    <>
      <div className='Container flex justify-between'>
        <ProductDetailIages />
        <ProductDetail />
      </div>
      <FooterMain />
    </>
  )
}

export default ProductDetailPage