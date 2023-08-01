import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should be able to change the selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "Rio de Janeiro",
          latitude: 123,
          longitude: 345,
        })
      )
    );

    expect(result.current.city?.name).toBe("Rio de Janeiro");
  });
});
