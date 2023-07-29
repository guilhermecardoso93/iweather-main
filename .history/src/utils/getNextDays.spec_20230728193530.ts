import { getNextDays } from "./getNextDays";

test("Should be able to return 5 days of informations", () => {
  const days = getNextDays();
  console.log(days);

  expect(days.length).toBe(5);
});
