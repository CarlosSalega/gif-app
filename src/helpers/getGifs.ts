import { GifImage, GiphyImageData } from "./types";

export async function getGifs(category: string): Promise<GifImage[]> {
  const api = `https://api.giphy.com/v1/gifs/search?api_key=g7ZQF61bJtVy47nSHV25oGD5IVzFNGuq&q=${category}&limit=6`;
  const resp = await fetch(api);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }: GiphyImageData) => ({
    id: id,
    title: title,
    url: images.downsized_medium.url,
  }));

  return gifs;
}
