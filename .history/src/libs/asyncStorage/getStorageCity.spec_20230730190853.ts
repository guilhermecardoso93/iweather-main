import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, saveStorageCity } from "./cityStorage";

describe("Storage: CityStorage", () => {
  it("should be return null when don't have a city storaged", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should be return city storaged", async () => {
    const newCity: CityProps = {
      id: "1",
      latitude: 345,
      longitude: 567,
      name: "Cabo frio",
    };
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity)
  });
});
