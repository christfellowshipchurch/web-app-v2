import currentUserIsMemberType from '../currentUserIsMemberType';

const leaders = [
  { node: { id: 'Leader:1234' } },
  { node: { id: 'Leader:5678' } },
];

test('it should return true when the current user is a leader', () => {
  const currentUser = { id: 'User:1234' };
  expect(currentUserIsMemberType(currentUser, leaders)).toBe(true);
});

test('it should return false when the current user is NOT a leader', () => {
  const currentUser = { id: 'User:4321' };
  expect(currentUserIsMemberType(currentUser, leaders)).toBe(false);
});
