import PropTypes from 'prop-types';

import { Box, SquareAvatar } from 'ui-kit';

export default function GroupMembers(props = {}) {
  const combinedMembers = [
    ...(props.leaders?.edges || []),
    ...(props.members?.edges || []),
  ].map(personEdge => personEdge.node);

  const hiddenCount = combinedMembers.length - props.showCount;

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${props.showCount + 1}, 1fr)`}
      gridTemplateRows="123%"
      gridColumnGap="s"
    >
      {combinedMembers.slice(0, props.showCount).map(member => (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          position="relative"
        >
          <SquareAvatar
            height="100%"
            key={member.id}
            name={`${member.firstName} ${member.lastName}`}
            src={member.photo?.uri}
            width="100%"
            mb="s"
          />
          <Box as="span" textAlign="center">
            {member.firstName}
          </Box>
        </Box>
      ))}
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
