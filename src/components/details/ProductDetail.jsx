import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardData from "../cards/Card.Data";
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarIcon from '@mui/icons-material/Star';

import { onAuthStateChanged, getAuth } from "firebase/auth";


const ProductDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [like, setLike] = useState(false)
    const [user, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {
        const getData = () => {
            try {
                const numericId = Number(id);
                const filteredData = CardData.find((item) => item.id === numericId);

                if (filteredData) {
                    setData(filteredData);
                } else {
                    setError("Car not found");
                }
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };

        getData();
    }, [id]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLike = (id) => {
        setLike(!like)
    }

    return (
        <>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : data ? (
                <div className="w-[550px] shadow-2xl py-[26px] px-6 flex flex-col justify-between ">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col gap-1.5">
                            <h2 className="text-[#171E1D] font-semibold text-[29px] leading-[32px]">{data.title}</h2>
                            <h4 className="text-[#171E1D] font-normal text-[16px] leading-[18px]">{data.location}</h4>
                        </div>
                        <button onClick={() => handleLike(id)} className='rounded-full border border-black w-[40px] h-[40px] text-red-500 cursor-pointer'>
                            {
                                like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />
                            }
                        </button>
                    </div>
                    <div className="w-full flex gap-1 items-center text-[#171E1D] font-semibold text-[16px] leading-[18px] ">
                        {data.star}<span className="text-yellow-500"><StarIcon /></span> 
                        <span className="capitalize text-[#00C29F] border-b-1"> 200 reviews</span>
                    </div>
                    <p className="w-full font-normal text-[16px] leading-[25px]">
                        Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort.
                    </p>
                    <div className="w-full flex justify-between items-center    ">
                        <h2 className="text-[#171E1D] font-bold text-[36px] leading-10">${data.price}<span className="font-normal text-[18px] leading-5">/night</span></h2>
                        <span>
                            {data.price_chart ? (
                                <div className='text-[#00C29F] flex items-center gap-2'>
                                    <div className='border-[1.5px] rounded-[3.5px] flex items-center justify-center'>
                                        <TrendingDownOutlinedIcon fontSize="small"/>
                                    </div>
                                    <span className="text-[16px] leading-[18px] font-normal">Best time to Book</span>
                                </div>
                            ) : null}
                        </span>
                    </div >
                    <Link to={'/login'}>
                        <button className="w-full cursor-pointer bg-[#00C29F] text-white py-4 rounded-md hover:bg-[#518d82]">Book this home</button>
                    </Link>
                    <div className="w-full flex flex-col gap-3">
                        <span className="text-[#787878] font-normal text-[16px] leading-[18px]">Hosted by:</span>
                        <hr />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-2.5">
                                <img
                                    src={user?.photoURL ? user.photoURL : "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"}
                                    alt="userImg"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-[#171E1D] text-[16px] leading-6 font-semibold">{user?.email ? user.email : 'Michelle Ward'}</h3>
                                    <h5 className="font-normal text-[14px] leading-4 ">Joined in May 2021</h5>
                                </div>
                            </div>
                            <div className="bg-[#DEFFF9] text-[#00C29F] h-[35px] py-2 px-[11px] flex items-center gap-[5px] rounded-2xl">
                                <img src={'/Vector.svg'} alt="" />
                                Superhost
                            </div>
                        </div>
                    </div>
                </div >
            ) : (
                <p>Loading...</p>
            )}
        </ >
    );
};

export default ProductDetail;
