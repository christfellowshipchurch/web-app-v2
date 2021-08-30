import { canStepBackward, canStepForward } from '../PaginationStepper.utils';

describe('canStepBackward', () => {
  it('returns `true` when you can move backward', () => {
    const total = 10;
    const stepBy = 1;
    const shouldBeTrue = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    shouldBeTrue.forEach(cursor =>
      expect(canStepBackward(total, cursor, stepBy)).toBe(true)
    );
  });

  it('returns `false` when you cannot backward', () => {
    const total = 10;
    const cursor = 1;
    const stepBy = 1;

    expect(canStepBackward(total, cursor, stepBy)).toBe(false);
  });
});

describe('canStepForward', () => {
  it('returns `true` when you can move forward', () => {
    const total = 10;
    const stepBy = 1;
    const shouldBeTrue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    shouldBeTrue.forEach(cursor =>
      expect(canStepForward(total, cursor, stepBy)).toBe(true)
    );
  });

  it('returns `false` when you cannot forward', () => {
    const total = 10;
    const cursor = 10;
    const stepBy = 1;

    expect(canStepForward(total, cursor, stepBy)).toBe(false);
  });
});
