function rem(target, context = 16) {
  const targetValue = target.split('px')[0];
  const value = targetValue / context;
  return String(`${value}rem`);
}

export default rem;
