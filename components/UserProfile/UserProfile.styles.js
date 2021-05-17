import styled from 'styled-components';

const UserProfile = styled.div``;

const AttributeValue = styled.p`
  overflow-wrap: break-word;
`;

const ContentGridSpacing = styled.div`
  grid-column-end: span 4;
`;

UserProfile.AttributeValue = AttributeValue;
UserProfile.ContentGridSpacing = ContentGridSpacing;

export default UserProfile;
