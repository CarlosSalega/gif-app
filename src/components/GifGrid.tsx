import { useEffect, useState } from "react";
import { GifGridProps, GifImage } from "../types";
import getGifs from "../helpers/getGifs";

const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const [images, setImages] = useState<GifImage[]>([]);

  const getImages = async () => {
    const newImages: GifImage[] = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};

export default GifGrid;

/*
api.giphy.com/v1/gifs/search/api_key=g7ZQF61bJtVy47nSHV25oGD5IVzFNGuq
*/
