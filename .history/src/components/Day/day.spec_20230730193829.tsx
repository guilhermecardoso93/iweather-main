import { render, screen } from "@testing-library/react-native";
import { Day } from ".";

import clearDay from "@assets/clear_day.svg";

describe("Component: Days", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          min: "30",
          max: "34",
          icon: clearDay,
          weather: "Céu Limpo",
        }}
      />
    );

    expect(screen.getByText('18/07')).toBeTruthy()
  });
});
