export interface AddCategoryProps {
  onNewCategory: (category: string) => void;
}

export interface GifGridProps {
  category: string;
}

export interface GifImage {
  id: string;
  title: string;
  url: string;
}

export interface ShowImage {
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export interface GiphyImageData {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}
