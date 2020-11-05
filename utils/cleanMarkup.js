function cleanMarkup(markup) {
  return markup.replace(/<p><br \/><\/p>/g, '').replace(/<p>\s<\/p>/g, '');
}

export default cleanMarkup;
