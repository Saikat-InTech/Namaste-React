import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useResturant from "../util/useResturant";
import useStatus from "../util/useStatus";

const Body = () => {
  const [value, setValue] = useState("");
  const list = useResturant();
  const [dvalue, setDvalue] = useState([]);

  useEffect(() => {
    setDvalue(list);
  }, [list]);
  const status = useStatus();

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

      <div className="flex flex-wrap justify-center items-center">
        {dvalue.map((resturant) => (
          <Card key={resturant.info.id} data={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
