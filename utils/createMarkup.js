import cleanMarkup from './cleanMarkup';

function createMarkup(string) {
  return { __html: cleanMarkup(string) };
}

export default createMarkup;
