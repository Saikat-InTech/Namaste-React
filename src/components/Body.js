import Card from "./Card";
// import {cardList} from "../util/mock_data"
import React, {useEffect,useState} from 'react';

const Body=()=>{

const [list,setList]=useState([]);

useEffect(()=>{
data();
},[])




const data= async ()=>{
    const resturants= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6179161&lng=88.4390412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json = await resturants.json();
  const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       console.log(restaurants)
// console.log(json.data.cards[1].card.card.
// gridElements.infoWithStyle.restaurants[0].info


// );
// let vb=json?.data?.cards?.card;
setList(restaurants);
// console.log(vb);


}


    return (
        <div className="Body-res">
    <div className="search">
        Search
    </div>
    <div className="res-cards">
{
   list.map((resturant)=>
    {
        // console.log(resturant);
        return <Card key={resturant.info.id} data={resturant}/>
})
}
    </div>
    </div>
    )
}
export default Body;