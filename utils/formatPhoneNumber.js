function formatPhoneNumber(phone) {
  const parts = String(phone).split('');
  if (parts.length === 10) {
    const [a, b, c, d, e, f, g, h, i, j] = parts;
    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
  }
  if (parts.length === 7) {
    const [a, b, c, d, e, f, g] = parts;
    return `${a}${b}${c}-${d}${e}${f}${g}`;
  }
  return phone;
}

export default formatPhoneNumber;
