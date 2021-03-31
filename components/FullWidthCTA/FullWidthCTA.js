import { Section, theme } from 'ui-kit';

export default function FullWidthCTA({ children, ...props }) {
  return (
    <Section
      background={`linear-gradient(to bottom right, ${theme.colors.gradient.join(
        ', '
      )})`}
      display="flex"
      alignItems="center"
      flexDirection="column"
      {...props}
    >
      {children}
    </Section>
  );
}
