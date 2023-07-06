import { GifGridProps, GifImage } from "../helpers/types";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid: React.FC<GifGridProps> = ({ category }) => {
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

export default GifGrid;
