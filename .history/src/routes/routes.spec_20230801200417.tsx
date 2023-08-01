import { render, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";
import { Dashboard } from "@screens/Dashboard";

describe("Routes", () => {
  it("should be render Search screen when not city selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it('should be render Dashboard screen when we have a city selected', async () => {
    render(<Dashboard />);
  })
});
