import React from "react";
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Example Title";
  const url = "https://example.com/image.gif";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(
      <GifItem title={title} images={{ downsized_medium: { url } }} />
    );
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} images={{ downsized_medium: { url } }} />);
    const { src, alt } = screen.getByRole("img") as HTMLImageElement;
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} images={{ downsized_medium: { url } }} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
