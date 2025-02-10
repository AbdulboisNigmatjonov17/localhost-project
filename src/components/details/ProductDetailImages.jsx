import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardData from '../cards/Card.Data';

function ProductDetailImages() {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [img, setImg] = useState(null);
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getData = () => {
            try {
                const numericId = Number(id);
                const filteredData = CardData.find((item) => item.id === numericId);

                if (filteredData) {
                    setData(filteredData);
                    setImg(filteredData.img);
                    if (filteredData.images && filteredData.images.length > 0) {
                        setImages(filteredData.images);
                    } else {
                        setImages([filteredData.img]);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [id]);


    return (
        <div className='w-[850px]'>
            {data ? (
                <div className='w-full flex flex-col gap-3.5'>
                    <div>
                        <img src={img} alt={data.title} className='w-full h-[500px] rounded-lg object-cover' />
                    </div>
                    <div className='w-full flex justify-between'>
                        <button onClick={()=> setImg(data.img)}>
                            <img
                                src={data.img}
                                alt={data.title}
                                className='w-40 h-20 cursor-pointer object-cover border border-[#00C29F]'
                            />
                        </button>
                        {images.map((image, index) => (
                            <button key={index} onClick={() => setImg(image)}>
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className='w-40 h-20 cursor-pointer object-cover border border-[#00C29F]'
                                />
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductDetailImages;
