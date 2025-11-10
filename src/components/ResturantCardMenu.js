import { useEffect, useState } from "react";

const ResturantCardMenu = () => {
  const [basicInfo, setBasicInfo] = useState(null);

  const URL =
    "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/aminia-shyam-bazar/order&location=&isMobile=0";

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    console.log(json);

    const info = json?.page_data?.sections?.SECTION_BASIC_INFO;
    setBasicInfo(info);
  };

  return (
    <div>
      <h1 className="text-center font-bold py-6">
        Resturant Name: {basicInfo?.name}
      </h1>
      <p className="text-center">{basicInfo?.cuisine_string}</p>
    </div>
  );
};

export default ResturantCardMenu;
