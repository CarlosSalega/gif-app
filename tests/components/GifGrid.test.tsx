import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");
const useFetchGifsMock = useFetchGifs as jest.MockedFunction<
  typeof useFetchGifs
>;

describe("Pruebas en <GifGrid />", () => {
  const category = "Naruto";

  test("debe de mostrar el loading al inicio", () => {
    useFetchGifsMock.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imágenes de useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Saint Seiya",
        url: "https://localhost/saint-seiya.jpg",
      },
    ];

    useFetchGifsMock.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
