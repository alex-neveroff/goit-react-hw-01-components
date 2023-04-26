export function getRandomColor() {
  const minLuminance = 0.4;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  if (luminance > minLuminance) {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  } else {
    getRandomColor();
  }
}
