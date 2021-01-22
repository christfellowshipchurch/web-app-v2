function parseNewlines(string) {
  if (!string) return '';
  return string.split('\\n').map((str, i) => (
    <span key={i}>
      {str}
      <br />
    </span>
  ));
}

export default parseNewlines;
