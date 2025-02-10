import { Link, useParams } from "react-router-dom"
import CardData from "../cards/Card.Data"
import { useState, useMemo } from "react"
import { FavoriteBorderOutlined, FavoriteOutlined, Star } from "@mui/icons-material"

const AboutSimiliar = () => {
    const [like, setLike] = useState(false)
    const currentId = useParams()

    const handleLike = () => {
        setLike(!like)
    }

    const randomCards = useMemo(() => {
        const filteredData = CardData.filter((item) => item.id !== currentId);
        const shuffled = filteredData.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }, [CardData, currentId]);


    const handleScrollToTop = () => {
        let currentPosition = window.scrollY;
        const scrollStep = currentPosition / 20;

        const scrollAnimation = () => {
            if (currentPosition > 0) {
                currentPosition -= scrollStep;
                window.scrollTo(0, currentPosition);
                requestAnimationFrame(scrollAnimation);
            }
        };

        requestAnimationFrame(scrollAnimation);
    };


    return (
        <div className='w-full flex flex-col gap-5'>
            <div className="w-full flex justify-between items-center">
                <h3>Similar stays</h3>
                <Link to={'/'}>
                    <h4 className='text-[#00C29F]'>View all</h4>
                </Link>
            </div>
            <div className="flex justify-between">
                {randomCards.map((item) => (
                    <div key={item.id} className="w-[30%] bg-white h-[145px] flex justify-between rounded-lg overflow-hidden">
                        <div className="relative w-[200px]">
                            <Link to={`/detail/${item.id}`}>
                                <button className="w-full" onClick={() => {
                                    handleLike(item.id);
                                    handleScrollToTop();
                                }}>
                                    <img src={item.img} alt="" className="h-[145px] w-full object-cover cursor-pointer" />
                                </button>
                            </Link>
                            <button
                                onClick={() => handleLike(item.id)}
                                className="absolute z-10 top-3.5 right-3 rounded-full bg-white w-[30px] h-[30px] text-red-500 cursor-pointer"
                            >
                                {like ? (
                                    <FavoriteOutlined />
                                ) : (
                                    <FavoriteBorderOutlined />
                                )}
                            </button>
                        </div>
                        <div className="flex flex-col justify-center pb-5 p-4 ">
                            <div>
                                <h3>{item.title}</h3>
                                <h4>{item.location}</h4>
                            </div>
                            <div>
                                ${item.star}
                                <Star />
                            </div>
                            <div>
                                ${item.price} <span>/night | {Math.floor(Math.random() * 10) + 1} guests</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default AboutSimiliar