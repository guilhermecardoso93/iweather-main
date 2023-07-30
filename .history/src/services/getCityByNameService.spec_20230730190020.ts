import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("Service: getCityByNameService", () => {
  it("should able return city information", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });
    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
