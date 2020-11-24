import { format } from 'date-fns';

import { formatPhoneNumber } from './';

function normalizeUserData(user) {
  const name = `${user?.profile?.firstName} ${user?.profile?.lastName}`;
  const src = user?.profile?.photo?.uri;
  const campus = user?.profile?.campus?.name;
  const address = user?.profile?.address;
  const _birthdate = user?.profile?.birthDate;
  const birthdate = _birthdate
    ? format(new Date(_birthdate), 'MMM d, yyyy')
    : null;
  const gender = user?.profile?.gender;
  const email = user?.profile?.email;
  const _phone = user?.profile?.phoneNumber;
  const phone = formatPhoneNumber(_phone);

  return { name, src, campus, address, birthdate, gender, email, phone };
}

export default normalizeUserData;
