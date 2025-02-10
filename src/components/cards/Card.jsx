import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';

const Card = ({ id, img, title, location, star, price, price_chart }) => {
    const [like, setLike] = useState(false)
    const handleLike = (id) => {
        setLike(!like)
    }
    return (
        <div key={id} className='max-w-full min-w-[280px] h-[400px] rounded-[10px] bg-white shadow relative transition-transform duration-300 hover:scale-110 '>
            <button onClick={() => handleLike(id)} className='absolute z-1 top-3.5 right-3 rounded-full bg-white w-[50px] h-[50px] text-red-500 cursor-pointer'>
                {
                    like ? <FavoriteOutlinedIcon fontSize='large' /> : <FavoriteBorderOutlinedIcon fontSize='large' />
                }
            </button>
            <div className='w-full h-[300px] overflow-hidden  rounded-t-[10px]'>
                <Link to={`/detail/${id}`}>
                    <img src={img} alt={`card-img-${id}`} className='rounded-t-[10px] w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-125' />
                </Link>
            </div>
            <div className='w-full h-[100px] flex flex-col gap-[14px] p-5 justify-center'>
                <div className='w-full flex justify-between'>
                    <div>
                        <h2>{title}</h2>
                        <h3>{location}</h3>
                    </div>
                    <div className='flex items-center'>
                        {star} <div className='text-yellow-500'><StarIcon /></div>
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                    <h3>${price}<span>/night</span></h3>
                    {price_chart ? <div className='text-[#00C29F] flex items-center gap-2'><div className='border-[1.5px] rounded-[3.5px]'><TrendingDownOutlinedIcon /></div> <span>Price chart</span></div> : null}
                </div>
            </div>
        </div >
    )
}

export default Card