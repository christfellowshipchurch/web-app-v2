import { Box, theme } from 'ui-kit';

export default function FullWidthCTA({ children, ...props }) {
  return (
    <Box
      background={`linear-gradient(to bottom right, ${theme.colors.gradient.join(
        ', '
      )})`}
      display="flex"
      alignItems="center"
      flexDirection="column"
      {...props}
    >
      {children}
    </Box>
  );
}
