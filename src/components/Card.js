const Card=({data})=>{
    // console.log(data);
    const {info}= data;
    const { name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo } = info;

    console.log(avgRating,
cloudinaryImageId,cuisines,
name,areaName, costForTwo);
   return ( 
    <div className="card">
      <div className="card-logo">
        <img 
  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
  alt="Food Image" 
/>
      </div>
<div className="card-head">
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{costForTwo} <span>RAting--{avgRating}</span></h4>
        </div>
    </div>

   
   )
}
export default Card;