import { Star } from '@mui/icons-material'
import AboutReviewsData from './AboutReviewsData'
import { Link } from 'react-router-dom'

const AboutReviews = () => {
    return (
        <div className='Container flex flex-col gap-5'>
            <div className='w-full flex justify-between '>
                <h3 className='font-semibold text-2xl leading-7'>Reviews</h3>
                <Link to={'/'}>
                    <h4 className='text-[#00C29F]'>View all</h4>
                </Link>
            </div>
            <div className='flex justify-between'>
                {
                    AboutReviewsData.map((item) => {
                        return (
                            <div key={item.id} className='w-[30%] bg-[#E8ECF2] rounded-lg p-6 border-1 border-[#e0e0e0] flex flex-col justify-between gap-3'>
                                <div className='w-full flex justify-between'>
                                    <div className='w-full flex gap-4'>
                                        <img src={item.img} alt={`${item.name}` + item.id} className='w-16 h-16 object-cover rounded-full ' />
                                        <div>
                                            <h3 className=' font-semibold text-[16px] leading-6'>{item.name}</h3>
                                            <h4 className='text-[#7A7A7A] font-normal text-[14px] leading-[16px]'>{item.date}</h4>
                                        </div>
                                    </div>
                                    <div className='text-yellow-500  flex'>
                                        <span className='text-black font-semibold text-[16px] leading-[18px]'>{item.star}</span><Star />
                                    </div>
                                </div>
                                <p className='font-normal text-[16px] leading-6'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutReviews