import { api } from "./api";

describe("API: getCityByNameService", () => {
  it("should able return city information", () => {
    const data = {
      id: "1",
      name: "São Paulo",
      sys: {
        country: "BR",
      },
      coord: {
        lat: 123,
        lon: 456,
      },
    };

    jest.spyOn(api, "get").mockResolvedValue({ data });
  });
});
