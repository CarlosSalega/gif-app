import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

jest.mock("../../src/hooks/useFetchGifs", () => ({
  useFetchGifs: jest.fn().mockReturnValue({
    images: [],
    isLoading: true,
  }),
}));

describe("Pruebas en <GifGrid />", () => {
  const category = "Naruto";

  test("debe de mostrar el loading al inicio", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    screen.debug();
  });
});
