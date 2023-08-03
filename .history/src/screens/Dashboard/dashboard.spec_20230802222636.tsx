import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { api } from "@services/api"
import { Dashboard } from "."
import { render, waitFor, screen } from "@testing-library/react-native"

describe("Screen: Dashboard", () => {
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue(({ data: mockWeatherAPIResponse}))

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i))
    expect(cityName).toBeTruthy()
  })
})