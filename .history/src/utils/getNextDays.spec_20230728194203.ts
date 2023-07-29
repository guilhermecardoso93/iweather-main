import { getNextDays } from './getNextDays';

describe('', () => {
  it("should be return the next five days", () => {
    const days = getNextDays();
  
    expect(days.length).toBe(5)
  });

  it('test 2', () => {
    const days = getNextDays();

    expect(days.length).toBe(5)
  })
})

