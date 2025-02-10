import React from 'react'
import FooterMain from '../../components/footer/FooterMain'
import ProductDetail from '../../components/details/ProductDetail'
import ProductDetailIages from '../../components/details/ProductDetailImages'
import DetailAbout from '../../components/details/DetailAbout'
import AboutReviews from '../../components/additional/AboutAdditional'
import AboutSimiliar from '../../components/additional/AboutSimiliar'

const ProductDetailPage = () => {
  return (
    <>
      <div className='Container py-10 flex flex-col gap-10'>
        <div className='w-full flex justify-between '>
          <ProductDetailIages />
          <ProductDetail />
        </div>
        <DetailAbout />
        <AboutReviews />
        <AboutSimiliar />
      </div>
      <FooterMain />
    </>
  )
}

export default ProductDetailPage