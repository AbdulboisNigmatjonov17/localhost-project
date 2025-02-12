import StoreIcon from '@mui/icons-material/Store';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import DetailAboutData from './DetailAboutData'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as Icons from '@mui/icons-material'
import { Link } from 'react-router-dom'
import MapImage from '../../assets/Map.png'

const DetailAbout = () => {
    return (
        <div className='w-full'>
            <div className='pb-6 flex flex-col gap-5'>
                <h3 className='text-[#171E1D] font-semibold leading-6 text-2xl'>About this home</h3>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-[830px] flex flex-col gap-10'>
                        <p className='text-[16px]  leading-7 font-normal '>
                            Welcome to Brightwoods Cabin, your idyllic retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway.
                            <br />
                            <br />
                            <span className='font-bold'>Living Space:</span> This charming cabin boasts a spacious living area adorned with rustic decor and modern amenities. Enjoy the warmth of the wood-burning fireplace, relax on the plush sofas, and make yourself at home with our entertainment center featuring a flat-screen TV, WiFi, and more.
                            <br />
                            <br />
                            <span className='font-bold'>Bedrooms:</span> With 3 beautifully appointed bedrooms, our cabin comfortably accommodates up to [number of guests]. Each room is furnished with luxurious bedding and unique woodland-inspired touches to ensure a restful slumber.
                        </p>
                        <span className='text-[#00C29F] font-semibold leading-7 text-[16px] cursor-pointer'>
                            <Link to={'/'}>
                                Show more
                            </Link>
                        </span>
                    </div>
                    <div className='w-[570px] flex flex-col gap-6'>
                        <div className='flex items-center gap-5 '>
                            <div className='w-[60px] h-[60px] text-[#00C29F] bg-[#DDF4F0] flex items-center justify-center rounded-lg'>
                                <StoreIcon fontSize='large' />
                            </div>
                            <div>
                                <h4 className='font-semibold text-[18px] leading-7 text-[#171E1D]'>Dedicated workspace</h4>
                                <h5 className='text-[16px] leading-[18px] font-normal text-[#7A7A7A]'>A private room equipped with WiFi</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 '>
                            <div className='w-[60px] h-[60px] text-[#00C29F] bg-[#DDF4F0] flex items-center justify-center rounded-lg'>
                                <HowToRegIcon fontSize='large' />
                            </div>
                            <div>
                                <h4 className='font-semibold text-[18px] leading-7 text-[#171E1D]'>Self check-in</h4>
                                <h5 className='text-[16px] leading-[18px] font-normal text-[#7A7A7A]'>Check in with just your phone</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 '>
                            <div className='w-[60px] h-[60px] text-[#00C29F] bg-[#DDF4F0] flex items-center justify-center rounded-lg'>
                                <EventBusyIcon fontSize='large' />
                            </div>
                            <div>
                                <h4 className='font-semibold text-[18px] leading-7 text-[#171E1D]'>Free cancellation</h4>
                                <h5 className='text-[16px] leading-[18px] font-normal text-[#7A7A7A]'>Cancel anytime</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr /><br />
            <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col items-start gap-5'>
                    <h3 className='font-semibold text-2xl leading-[26px] text-[#171E1D]'>Amenities</h3>
                    <div className='grid grid-cols-3 gap-7'>
                        {
                            DetailAboutData.map((item) => {
                                const IconComponent = Icons[item.icon];
                                return (
                                    <div key={item.id} className='flex gap-2.5 font-normal text-[16px] leading-[18px] text-[#171E1D]'>
                                        {IconComponent && <IconComponent />}
                                        {item.title}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='border border-black rounded-md hover:bg-black hover:text-white cursor-pointer py-2.5 px-5'>
                        Show all amenities
                    </button>
                </div>
                <div className='w-[480px] flex flex-col gap-2.5'>
                    <div className='w-full flex justify-between '>
                        <div className='flex flex-col gap-1.5'>
                            <h3 className='font-semibold text-2xl leading-[26px] text-[#171E1D]'>Where youll be</h3>
                            <span className='font-normal text-[16px] leading-[18px] text-[#171E1D]'><LocationOnIcon />The Bridle Path</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CloudOutlinedIcon fontSize='large' />
                            <div>
                                <h4 className='font-semibold text-[16px] leading-6'>20°C</h4>
                                <span className='text-[#7A7A7A] font-normal text-[14px] leading-[16px]'>Broken clouds</span>
                            </div>
                        </div>
                    </div>
                    <img src={MapImage} alt="Map-Image" />
                </div>
            </div>
        </div>
    )
}

export default DetailAbout