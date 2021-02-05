function splitString(string, key = '\\n') {
  if (!string) return '';
  return string.split(key).map((str, i) => (
    <span key={i}>
      {str}
      <br />
    </span>
  ));
}

export default splitString;
