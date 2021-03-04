import slugify from '../slugify';

test('it should turn a string into a slug', () => {
  expect(slugify('My Test String')).toEqual('my-test-string');
  expect(slugify('Servicio en Español Online')).toEqual(
    'servicio-en-espanol-online'
  );
  expect(slugify('Night of Prayer & Worship')).toEqual(
    'night-of-prayer-worship'
  );
  expect(slugify()).toEqual(null);
});
