import { getStorageCity } from "./cityStorage";

describe("Storage: getStorageCity", () => {
  it("should be return null when don't have a city storage", async () => {
    const response = await getStorageCity()
    console.log(response)
  });
});
