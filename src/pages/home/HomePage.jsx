import React from 'react'
import BannerForm from '../../components/banner/BannerForm'
import FooterMain from '../../components/footer/FooterMain'
import MainCards from '../../components/cards/MainCards'
// import Comment from '../../components/comments/Comment'

const HomePage = () => {
  return (
    <>
      <BannerForm />
      <MainCards/>
      <FooterMain/>
      {/* <Comment/> */}
    </>
  )
}

export default HomePage