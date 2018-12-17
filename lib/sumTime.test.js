import sumTime from './sumTime';

describe("utils", () => {
  let initialValue;
  beforeEach(() => {
    initialValue = {
      days: 0, hours: 0, mins: 0, secs: 0,
    };
  });

  describe('sumTime', () => {
    it('should only inc secs', () => {
      expect(sumTime(initialValue, [0, 0, 1])).toEqual({
        ...initialValue,
        secs: 1,
      });
    });

    it('should only inc mins', () => {
      expect(sumTime(initialValue, [0, 1, 0])).toEqual({
        ...initialValue,
        mins: 1,
      });
    });

    it('should only inc hours', () => {
      expect(sumTime(initialValue, [1, 0, 0])).toEqual({
        ...initialValue,
        hours: 1,
      });
    });

    it('should inc mins, and set secs to 0', () => {
      expect(sumTime({ ...initialValue, secs: 1 }, [0, 0, 59])).toEqual({
        ...initialValue,
        mins: 1,
        secs: 0,
      });
    });

    it('should inc hours, and set mins to 0', () => {
      expect(sumTime({ ...initialValue, mins: 1 }, [0, 59, 0])).toEqual({
        ...initialValue,
        mins: 0,
        hours: 1,
      });
    });

    it('should inc days, and set hours to 0', () => {
      expect(sumTime({ ...initialValue, hours: 1 }, [23, 0, 0])).toEqual({
        ...initialValue,
        mins: 0,
        days: 1,
      });
    });

    it('should be 1 day', () => {
      expect(sumTime({ days: 0, hours: 0, mins: 0, secs: 59 }, [23, 59, 1])).toEqual({
        days: 1,
        hours: 0,
        mins: 0,
        secs: 0,
      });
    });

    it('should be 1 day 1 sec', () => {
      expect(sumTime({ days: 0, hours: 0, mins: 0, secs: 59 }, [23, 59, 2])).toEqual({
        days: 1,
        hours: 0,
        mins: 0,
        secs: 1,
      });
    });

    describe('when given only 2 arrays', () => {
      it('should be 1 day', () => {
        expect(sumTime({ days: 0, hours: 23, mins: 58, secs: 59 }, [1, 1])).toEqual({
          days: 1,
          hours: 0,
          mins: 0,
          secs: 0,
        });
      });
    });
  });
});