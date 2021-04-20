import find from 'lodash/find';

function currentUserIsLeader(currentUser, leaders) {
  const id = _id => (!_id ? _id : _id.split(':').pop());
  const match = find(
    leaders,
    leader => id(leader?.node?.id) === id(currentUser?.id)
  );
  return match ? true : false;
}

export default currentUserIsLeader;
