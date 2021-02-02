import PropTypes from 'prop-types';

import { Box, theme } from 'ui-kit';

export default function FlagCTA({
  color = 'primary',
  left,
  right,
  width,
  children,
  ...props
}) {
  let radius;
  if (left) {
    radius = `0 ${theme.radii.image} ${theme.radii.image} 0`;
  }

  if (right) {
    radius = `${theme.radii.image} 0 0 ${theme.radii.image}`;
  }
  return (
    <Box position="relative" width="100%" {...props}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="absolute"
        top="0"
        left={left ? '0' : null}
        right={right ? '0' : null}
        width={width}
        height={props.height}
        borderRadius={radius}
        bg={color}
      >
        {children}
      </Box>
    </Box>
  );
}

FlagCTA.propTypes = {
  color: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
