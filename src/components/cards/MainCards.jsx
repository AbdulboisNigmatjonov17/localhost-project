import Card from "./Card"
import CardData from "./Card.Data"

const MainCards = () => {

    return (
        <div className='w-full my-5'>
            <div className="Container">
                <h3 className="mb-5">Stays nearby: <span>Toronto Ontario</span></h3>
            </div>
            <div className="Container grid grid-cols-4 justify-between gap-5">
                {
                    CardData.map((item) => {
                        return <Card key={item.id} id={item.id} title={item.title} location={item.location} img={item.img} price={item.price} star={item.star} />
                    })
                }
            </div>
        </div>
    )
}

export default MainCards