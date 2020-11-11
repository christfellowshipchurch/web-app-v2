function cleanMarkup(markup) {
  if (!markup) return '';
  return markup.replace(/<p><br \/><\/p>/g, '').replace(/<p>\s<\/p>/g, '');
}

export default cleanMarkup;
