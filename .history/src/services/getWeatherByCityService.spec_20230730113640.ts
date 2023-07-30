import { api } from "./api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse"

describe("Service: getWeatherByCityService", () => {
  it('Should return whether api data', () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
  })

})