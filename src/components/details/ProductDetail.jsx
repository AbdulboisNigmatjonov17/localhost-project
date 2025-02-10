import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardData from "../cards/Card.Data";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarIcon from '@mui/icons-material/Star';

const ProductDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [like, setLike] = useState(false)

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

    const handleLike = (id) => {
        setLike(!like)
    }

    return (
        <div>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : data ? (
                <div className="max-w-[530px] shadow-2xl py-[26px] px-6">
                    <div className="w-full flex justify-between">
                        <div>
                            <h2>{data.title}</h2>
                            <h4>{data.location}</h4>
                        </div>
                        <button onClick={() => handleLike(id)} className='rounded-full border border-black w-[40px] h-[40px] text-red-500 cursor-pointer'>
                            {
                                like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />
                            }
                        </button>
                    </div>
                    <div className="w-full flex gap-1 items-center">
                        {data.star}<span className="text-yellow-500"><StarIcon /></span>
                        <span className="capitalize text-[#00C29F]">| 200 reviews</span>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetail;
