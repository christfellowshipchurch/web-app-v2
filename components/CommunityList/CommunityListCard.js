import { HorizontalHighlightCard } from 'ui-kit';

export default function CommunityListCard(props = {}) {
  return (
    <HorizontalHighlightCard
      as="a"
      minWidth={300}
      type="HIGHLIGHT_SMALL"
      {...props}
    />
  );
}
