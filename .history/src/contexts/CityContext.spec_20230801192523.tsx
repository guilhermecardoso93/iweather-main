import { useCity } from "@hooks/useCity";
import { renderHook } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should be able to change the selected city", () => {
    renderHook(() => useCity(), { wrapper: CityProvider });
  });
});
