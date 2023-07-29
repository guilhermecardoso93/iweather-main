import { getNextDays } from "./getNextDays";

test("Should be able to return 5 days", () => {
  const days = getNextDays();

  expect(days.length).toBe(5);
});
