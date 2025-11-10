import Card, { withPromotedCard } from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import ResturantCardMenu from "./ResturantCardMenu";

import useResturant from "../util/useResturant";
import useStatus from "../util/useStatus";
const Body = () => {
  const [value, setValue] = useState("");
  const list = useResturant();
  const [dvalue, setDvalue] = useState([]);
  const PromotedCard = withPromotedCard(Card);
  const [mCard, SetmCard] = useState(false);

  useEffect(() => {
    setDvalue(list);
  }, [list]);

  const status = useStatus();
  if (mCard) {
    return <ResturantCardMenu />;
  }
  if (status === false) return <h1>Your Internet Off</h1>;
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body-res">
      <div className="search">
        <input
          className="p-2 m-3 border-2 rounded-sm"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-blue-400 rounded-sm p-2 m-1"
          onClick={() => {
            const newlist = list.filter((res) =>
              res.info.name.toLowerCase().includes(value.toLowerCase())
            );
            setDvalue(newlist);
          }}>
          Search
        </button>
      </div>

      <div
        onClick={() => {
          SetmCard(true);
        }}
        className="flex flex-wrap justify-center items-center">
        {dvalue.map((resturant) =>
          resturant.info.isOpen ? (
            <PromotedCard key={resturant.info.id} data={resturant} />
          ) : (
            <Card key={resturant.info.id} data={resturant} />
          )
        )}
      </div>

      {/* ✅ Place infinite scroll here */}
    </div>
  );
};

export default Body;
