import { useEffect, useState } from "react";
import { GifImage } from "../helpers/types";
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<GifImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages: GifImage[] = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    images,
    isLoading,
  };
};
