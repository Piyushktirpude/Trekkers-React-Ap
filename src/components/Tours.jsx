import Card from "./Card";
import "../index.css";

function Tours({tours, removeTour}) {
    return (
        <div className="container">
            <div>
                <h1 className="title">Maharashtra Treks</h1>
            </div>
            <div className="cards-container">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;