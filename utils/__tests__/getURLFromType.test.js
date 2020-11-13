import getURLFromType from '../getURLFromType';

test('it should return the correct URL for EventContentItem', () => {
  expect(
    getURLFromType({ id: 'EventContentItem:123', title: 'event-content-item' })
  ).toEqual('/events/event-content-item');
});

test('it should return the correct URL for InformationalContentItem', () => {
  expect(
    getURLFromType({
      id: 'InformationalContentItem:123',
      title: 'informational-content-item',
    })
  ).toEqual('/items/informational-content-item-123');
});

test('it should return the correct URL for MediaContentItem', () => {
  expect(
    getURLFromType({
      id: 'MediaContentItem:123',
      title: 'media-content-item',
    })
  ).toEqual('/content/media-content-item-123');
});
