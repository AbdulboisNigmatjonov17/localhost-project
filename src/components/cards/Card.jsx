import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const Card = ({ id, img, title, location, star, price }) => {

    return (
        <div key={id} className='max-w-full min-w-[280px] h-[400px] rounded-[10px] bg-white shadow'>
            <div className='w-full h-[300px] overflow-hidden  rounded-t-[10px]'>
                <Link to={'/'}>
                    <img src={img} alt={`card-img-${id}`} className='rounded-t-[10px] w-full h-full cursor-pointertransition-transform duration-300 transform hover:scale-125' />
                </Link>
            </div>
            <div className='w-full flex flex-col gap-[14px] p-5 justify-center'>
                <div className='w-full flex justify-between'>
                    <div>
                        <h2>{title}</h2>
                        <h3>{location}</h3>
                    </div>
                    <div className='flex items-center'>
                        {star} <div className='text-yellow-500'><StarIcon /></div>
                    </div>
                </div>
                <h3>${price}<span>/night</span></h3>
            </div>
        </div >
    )
}

export default Card