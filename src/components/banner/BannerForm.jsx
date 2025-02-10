import bannerBgImage from '../../assets/bannerFormBgImage.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const BannerForm = () => {
    return (
        <>
            <section className='w-full h-[264px] bg-cover bg-no-repeat pt-[50px] pb-[30px]' style={{ backgroundImage: `url(${bannerBgImage})` }}>
                <div className='Container flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-[40px] leading-[45px]'>Find a <span className='text-[#00C29F]'>host</span> for every journey</h1>
                        <h3 className='font-light text-[20px] leading-6'>Discover the best local rental properties that fits your every travel needs</h3>
                    </div>
                    <form className='bg-white rounded-[10px] py-2.5 px-3 flex justify-between'>
                        <div className='flex border-[1px] border-[#D9D9D9] w-[540px] py-[17px] px-3 rounded-[4px] justify-between'>
                            <h3 className='font-normal text-[14px] leading-[22px]'>Accommodation</h3>
                            <HomeOutlinedIcon />
                        </div>
                        <div className='flex gap-3.5'>
                            <div className='w-[172px] px-3 py-[17px] flex justify-between rounded-[4px] border-[1px] border-[#D9D9D9]'>
                                <h4>Check-in</h4>
                                <CalendarTodayTwoToneIcon />
                            </div>
                            <div className='w-[172px] px-3 py-[17px] flex justify-between rounded-[4px] border-[1px] border-[#D9D9D9]'>
                                <h4>Check-out</h4>
                                <CalendarTodayTwoToneIcon />
                            </div>
                            <div className='w-[172px] px-3 py-[17px] flex justify-between rounded-[4px] border-[1px] border-[#D9D9D9]'>
                                <h4>Guest</h4>
                                <PersonOutlineOutlinedIcon />
                            </div>
                        </div>
                        <button className='py-[15px] px-[30px] rounded-[4px] bg-[#00C29F] text-white font-medium text-[16px] leading-[26px] flex gap-[9px] items-center'>
                            <SearchOutlinedIcon />
                            Search
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default BannerForm