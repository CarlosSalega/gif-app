import { GifImage, GiphyImageData } from "../types";

const getGifs = async (category: string): Promise<GifImage[]> => {
  const api = `https://api.giphy.com/v1/gifs/search?api_key=g7ZQF61bJtVy47nSHV25oGD5IVzFNGuq&q=${category}&limit=10`;
  const resp = await fetch(api);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }: GiphyImageData) => ({
    id: id,
    title: title,
    images: images.fixed_width_small.url,
  }));
  console.log(gifs);
  return gifs;
};

export default getGifs;
