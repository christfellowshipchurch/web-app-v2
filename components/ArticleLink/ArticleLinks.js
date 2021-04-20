import { CardGrid } from 'ui-kit';

export default function ArticleLinks({ fullWidth = true, children }) {
  return (
    <CardGrid
      gridTemplateColumns={{
        _: 'repeat(1, 1fr)',
        lg: `repeat(${fullWidth ? 2 : 1}, 1fr)`,
      }}
    >
      {children}
    </CardGrid>
  );
}
