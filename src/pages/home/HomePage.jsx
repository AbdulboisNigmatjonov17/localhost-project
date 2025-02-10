import React from 'react'
import BannerForm from '../../components/banner/BannerForm'
import FooterMain from '../../components/footer/FooterMain'
import MainCards from '../../components/cards/MainCards'

const HomePage = () => {
  return (
    <>
      <BannerForm />
      <MainCards />
      <div className='w-full flex justify-center items-center my-5 '>
        <button className='border border-[#00C29F] py-2.5 p-7 rounded-md text-[#00C29F] cursor-pointer'>Show more</button>
      </div>
      <FooterMain />
    </>
  )
}

export default HomePage