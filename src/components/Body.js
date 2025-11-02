import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useResturant from "../util/useResturant";

const Body = () => {
  const [value, setValue] = useState("");
  const list = useResturant();
  const [dvalue, setDvalue] = useState([]);

  useEffect(() => {
    setDvalue(list);
  }, [list]);

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body-res">
      <div className="search">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            const newlist = list.filter((res) =>
              res.info.name.toLowerCase().includes(value.toLowerCase())
            );
            setDvalue(newlist);
          }}>
          Search
        </button>
      </div>

      <div className="res-cards">
        {dvalue.map((resturant) => (
          <Card key={resturant.info.id} data={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
