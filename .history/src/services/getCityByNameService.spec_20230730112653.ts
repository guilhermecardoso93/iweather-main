import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
import { mockCityApiResponse } from "@__tests__/mocks/mockCityApiResponse";

describe("API: getCityByNameService", () => {
  it("should able return city information", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });
    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
