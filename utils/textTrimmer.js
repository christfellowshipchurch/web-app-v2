const textTrimmer = (text, length) => {
  length = length ? length : 150
  return text.substring(0, length)
}

export default textTrimmer;
