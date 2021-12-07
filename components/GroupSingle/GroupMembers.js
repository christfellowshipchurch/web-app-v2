import PropTypes from 'prop-types';

import { Box, SquareAvatar } from 'ui-kit';

export default function GroupMembers(props = {}) {
  const combinedMembers = [
    ...(props.leaders?.edges || []),
    ...(props.members?.edges || []),
  ].map(personEdge => personEdge.node);

  const hiddenCount = combinedMembers.length - props.showCount;

  return (
    <Box display="flex" flexDirection="row" mx="-5px">
      {combinedMembers.slice(0, props.showCount).map(member => (
        <Box key={member.id} textAlign="center" mx="5px">
          <SquareAvatar
            key={member.id}
            height="100px"
            width="75px"
            name={`${member.firstName} ${member.lastName}`}
            src={member.photo?.uri}
            mb="s"
          />
          <Box as="span" textAlign="center">
            {member.firstName}
          </Box>
        </Box>
      ))}
      {hiddenCount > 0 && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          pl="xs"
          pb="l"
        >
          <Box as="p" fontSize="l">
            +{hiddenCount}
          </Box>
        </Box>
      )}
    </Box>
  );
}

const PersonEdgeShape = PropTypes.shape({
  node: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.shape({
      uri: PropTypes.string,
    }),
  }),
});

GroupMembers.propTypes = {
  showCount: PropTypes.number,
  leaders: PropTypes.shape({
    edges: PropTypes.arrayOf(PersonEdgeShape),
    totalCount: PropTypes.number,
  }),
  members: PropTypes.shape({
    edges: PropTypes.arrayOf(PersonEdgeShape),
    totalCount: PropTypes.number,
  }),
};
