import cleanMarkup from '../cleanMarkup';

test('it should remove empty paragraphs with <br> tag', () => {
  const markup = '<p>Content</p><p><br /></p><p>Content</p>';
  expect(cleanMarkup(markup)).toEqual('<p>Content</p><p>Content</p>');
});

test('it should remove empty paragraphs', () => {
  const markup = '<p>Content</p><p> </p><p>Content</p>';
  expect(cleanMarkup(markup)).toEqual('<p>Content</p><p>Content</p>');
});
