import formatPhoneNumber from '../formatPhoneNumber';

test('it should format a 10-digit phone number', () => {
  expect(formatPhoneNumber('1234567890')).toEqual('(123) 456-7890');
});

test('it should format a 7-digit phone number', () => {
  expect(formatPhoneNumber('1234567')).toEqual('123-4567');
});
