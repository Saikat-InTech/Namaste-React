import { useEffect, useState } from "react";

const useResturant = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6179161&lng=88.4390412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setList(restaurants);
  };
  return list;
};
export default useResturant;
