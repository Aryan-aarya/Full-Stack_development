import React,{useState,useEffect} from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
    const [gif, setGif] = useState(null);
    const [loding, setloding] = useState(false);

  
    async function fetchData(tag) {
      setloding(true);
      const response = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = response.data.data.images.downsized_large.url;
      setGif(imageSource);
      setloding(false);
    }
    useEffect(() => {
      fetchData('car');
      // eslint-disable-next-line
    },[])

    return{gif,loding,fetchData};
}

export default useGif