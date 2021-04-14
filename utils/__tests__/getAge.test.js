import getAge from '../getAge';

test('it should return the correct age', () => {
  expect(getAge(new Date())).toEqual(0);
  expect(getAge('2010-01-01')).toEqual(11);
});
