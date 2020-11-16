import validateEmail from '../validateEmail';

test('it should validate a valid email', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('it should NOT validate an invalid email', () => {
  expect(validateEmail('test.com')).toBe(false);
});
