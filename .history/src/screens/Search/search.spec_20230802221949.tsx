import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import { Search } from ".";
import { api } from "@services/api";
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse";

describe("Screen: Search", () => {
  it("should be show city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });
    render(<Search />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText(/são paulo/));
    expect(option).toBeTruthy();
  });
});
