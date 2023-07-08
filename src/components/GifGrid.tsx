import React from "react";
import { GifGridProps, GifImage } from "../helpers";
import { useFetchGifs } from "../hooks";
import { GifItem } from "./GifItem";

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const { images, isLoading }: { images: GifImage[]; isLoading: boolean } =
    useFetchGifs(category);

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifItem
            key={id}
            title={title}
            images={{ downsized_medium: { url: url } }}
          />
        ))}
      </div>
    </>
  );
};
