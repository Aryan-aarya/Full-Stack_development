import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hook/useGif";
const Tags = () => {
  const [tag,setTag] = useState("Car");


  // const [gif, setGif] = useState(null);
  // const [loding, setloding] = useState(false);

  // async function fetchData() {
  //   setloding(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const response = await axios.get(url);
  //   const imageSource = response.data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setloding(false);
  // }


  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line
  // },[]);

  const{gif ,loding,fetchData}=useGif(tag);
  return (
    <div className="w-1/2 bg-rose-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>

      {loding ? <Spinner /> : <img src={gif} width="400" />}

      <input 
      className="w-10/12 text-lg py-2 rounded-lg mb-[2px] text-center"
      onChange={(event)=>setTag(event.target.value)}
      value={tag}

      />
      <button
        onClick={()=>fetchData(tag)}
        className="w-10/12 bg-yellow-100 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tags;
