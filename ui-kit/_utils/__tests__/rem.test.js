import rem from '../rem';

test('it should turn a pixel value into a rem', () => {
  expect(rem('16px')).toEqual('1rem');
  expect(rem('24px')).toEqual('1.5rem');
});
