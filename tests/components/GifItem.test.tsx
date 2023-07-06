import React from "react";
import { render } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Example Title";
  const url = "https://example.com/image.gif";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(
      <GifItem title={title} images={{ downsized_medium: { url } }} />
    );
    expect(container).toMatchSnapshot();
  });
});
