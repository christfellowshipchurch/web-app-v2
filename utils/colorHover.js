import Color from 'color';

export default function colorHover(color) {
  return Color(color).saturate(0.1).darken(0.35).hex();
}
