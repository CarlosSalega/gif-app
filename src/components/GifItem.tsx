import React from "react";
import { ShowImage } from "../helpers/types";

export const GifItem = ({ title, images }: ShowImage) => {
  return (
    <div className="card">
      <img src={images.downsized_medium.url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
