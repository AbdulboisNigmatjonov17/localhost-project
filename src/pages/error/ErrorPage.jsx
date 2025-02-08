import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='w-[100vw] h-[80vh] flex flex-col justify-center items-center gap-5'>
            <h1 className='text-7xl font-semibold'>ErrorPage</h1>
            <button className='bg-black text-white py-2 px-5 rounded-lg'>
                <Link to={'/'}>Go back to Home</Link>
            </button>
        </div>
    )
}

export default ErrorPage