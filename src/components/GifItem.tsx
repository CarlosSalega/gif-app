import { GiphyImageData } from "../types";

const GifItem = ({ id, title, images }: GiphyImageData) => {
  return (
    <div className="card">
      <h4>{id}</h4>
      <img src={images.downsized_medium.url} alt={"img"} />
      <p>{title}</p>
    </div>
  );
};

export default GifItem;
