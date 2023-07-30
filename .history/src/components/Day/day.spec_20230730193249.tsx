import { render } from "@testing-library/react-native";
import { Day } from ".";

import clearDay from "@assets/clear_day.svg";

describe("Component: Days", () => {
  it("should be render day", () => {
    const { debug } = render(
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
  });
});
