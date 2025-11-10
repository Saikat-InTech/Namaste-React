import { CARD_LOGO_URL } from "../util/constant";
// import ResturantCardMenu from "./ResturantCardMenu";
import React, { useState } from "react";

const Card = (props) => {
  // console.log(props);
  const { info } = props.data;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } = info;
  // const { freedelMessage } = info.loyaltyDiscoverPresentationInfo;
  // cosonloe.log(freedelMessage);
  // const [mCard, SetmCard] = useState(false);
  // if (mCard) {
  //   return <ResturantCardMenu />;
  // }
  return (
    <div
      // onClick={() => {
      //   SetmCard(true);
      // }}
      className="w-64 h-80 bg-white rounded-xl shadow-lg p-4 m-4 hover:scale-105 transition-transform duration-300">
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
export const withPromotedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full absolute z-50 m-4  text-sm font-semibold text-white bg-[#fc8019] shadow-sm">
          One free delivery
        </span>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
