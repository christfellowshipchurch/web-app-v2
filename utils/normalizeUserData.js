import { format } from 'date-fns';

import { formatPhoneNumber } from './';

function formatAddress(address) {
  const { street1, city, state, postalCode } = address;
  const noAddress =
    street1 === '' || city === '' || state === '' || postalCode === '';
  if (noAddress) return null;
  return `${street1}, ${city}, ${state} ${postalCode}`;
}

function normalizeUserData(user) {
  const name = `${user?.profile?.firstName} ${user?.profile?.lastName}`;
  const src = user?.profile?.photo?.uri;
  const campus = user?.profile?.campus?.name;
  const campusId = user?.profile?.campus?.id;
  const _address = user?.profile?.address;
  const address = _address ? formatAddress(_address) : null;
  const { street1: street, city, state, postalCode: zip } = _address
    ? _address
    : {};
  const _birthdate = user?.profile?.birthDate;
  const birthdate = _birthdate
    ? format(new Date(_birthdate), 'MMM d, yyyy')
    : null;
  const gender = user?.profile?.gender;
  const email = user?.profile?.email;
  const _phone = user?.profile?.phoneNumber;
  const phone = formatPhoneNumber(_phone);
  const allowEmail = user?.profile?.communicationPreferences?.allowEmail;
  const allowSMS = user?.profile?.communicationPreferences?.allowSMS;

  return {
    name,
    src,
    campus,
    campusId,
    address,
    street,
    city,
    state,
    zip,
    birthdate,
    gender,
    email,
    phone,
    user,
    allowEmail,
    allowSMS,
  };
}

export default normalizeUserData;
