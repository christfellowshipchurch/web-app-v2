import validatePhoneNumber from '../validatePhoneNumber';

test('it should validate a valid phone number', () => {
  expect(validatePhoneNumber('1234567890')).toBe(true);
});

test('it should not validate an invalid phone number', () => {
  expect(validatePhoneNumber('123')).toBe(false);
  expect(validatePhoneNumber('notaphonenumber')).toBe(false);
});
