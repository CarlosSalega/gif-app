import { getGifs } from "../../src/helpers";

describe("Pruebas en getGifs", () => {
  test("debe de retornar un array de gifs", async () => {
    const gifs = await getGifs("Naruto");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
