import { useEffect } from "react";
import { GifGridProps } from "../types";

const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const getGifs = async () => {
    const api = `https://api.giphy.com/v1/gifs/search?api_key=g7ZQF61bJtVy47nSHV25oGD5IVzFNGuq&q=${category}`;
    const resp = await fetch(api);
    const { data } = await resp.json();
    console.log(data);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div>
      <h3>{category}</h3>
      <p>Hello World</p>
    </div>
  );
};

export default GifGrid;

/*
api.giphy.com/v1/gifs/search/api_key=g7ZQF61bJtVy47nSHV25oGD5IVzFNGuq
*/
