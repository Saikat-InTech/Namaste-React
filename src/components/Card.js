import { CARD_LOGO_URL } from "../util/constant";

const Card = (props) => {
  const { info } = props.data;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } = info;

  return (
    <div className="w-64 h-80 bg-white rounded-xl shadow-lg p-4 m-4 hover:scale-105 transition-transform duration-300">
      <div className="w-full h-40 rounded-lg overflow-hidden flex justify-center items-center bg-gray-100">
        <img
          src={`${CARD_LOGO_URL}${cloudinaryImageId}`}
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-3 text-center">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
        <h3 className="text-sm text-gray-500 line-clamp-2">
          {cuisines.join(", ")}
        </h3>
        <h4 className="mt-2 text-sm font-medium text-gray-700">
          {costForTwo} • <span className="text-yellow-500">⭐ {avgRating}</span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
