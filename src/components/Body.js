import Card from "./Card";
import {cardList} from "../util/mock_data"
const Body=()=>{
    return (
        <div className="Body-res">
    <div className="search">
        Search
    </div>
    <div className="res-cards">
{
    cardList.map((resturant)=>
    (
        <Card data={resturant}/>
    ))
}
    </div>
    </div>
    )
}
export default Body;