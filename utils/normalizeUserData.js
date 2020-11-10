function normalizeUserData(user) {
  const name = `${user?.profile?.firstName} ${user?.profile?.lastName}`;
  const src = user?.profile?.photo?.uri;

  return { name, src };
}

export default normalizeUserData;
