import {CARD_LOGO_URL} from "../util/constant"

const Card=({data})=>{
    // console.log(data);
    const {info}= data;
    const { name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo,id } = info;

//     console.log(avgRating,
// cloudinaryImageId,cuisines,
// name,areaName, costForTwo);
   return ( 
    <div className="card">
      <div className="card-logo">
        <img 
  src={`${CARD_LOGO_URL}${cloudinaryImageId}`} 
  alt="Food Image" 
/>
      </div>
<div className="card-head">
        <h2>{name}</h2>
        <h3>{cuisines.join(",\n")}</h3>
        <h4>{costForTwo} <span>RAting--{avgRating}</span></h4>
        </div>
    </div>

   
   )
}
export default Card;